import { useEffect, useState } from "react";

export default function TicketList({ tickets, fetchTickets }) {
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/tickets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-gray-500 italic">No tickets yet.</p>
      ) : (
        <ul className="space-y-4">
          {tickets.map((t) => (
            <li
              key={t.id}
              className="bg-gray-50 border rounded-lg p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              {/* Ticket Info */}
              <div className="mb-3 sm:mb-0">
                <p className="font-bold text-base sm:text-lg">{t.title}</p>
                <p className="text-sm text-gray-600">{t.description}</p>
                <p className="text-xs mt-1">
                  <span className="font-medium">Priority:</span>{" "}
                  <span
                    className={
                      t.priority === "High"
                        ? "text-red-600 font-semibold"
                        : t.priority === "Medium"
                        ? "text-yellow-600 font-semibold"
                        : "text-green-600 font-semibold"
                    }
                  >
                    {t.priority}
                  </span>
                </p>
                <p className="text-xs">
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={
                      t.status === "Closed"
                        ? "text-red-600 font-semibold"
                        : t.status === "InProgress"
                        ? "text-yellow-600 font-semibold"
                        : "text-blue-600 font-semibold"
                    }
                  >
                    {t.status}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                {t.status !== "InProgress" && (
                  <button
                    onClick={() => updateStatus(t.id, "InProgress")}
                    className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
                  >
                    In Progress
                  </button>
                )}
                {t.status !== "Closed" && (
                  <button
                    onClick={() => updateStatus(t.id, "Closed")}
                    className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Close
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
