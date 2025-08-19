import { useState } from "react";

export default function TicketForm({ onCreated }) {   // ✅ added onCreated prop
  const [form, setForm] = useState({ title: "", description: "", priority: "Low" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // TicketForm.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", description: "", priority: "Low" });
    // ❌ remove window.location.reload();
    // ✅ just trigger parent's refresh
    if (typeof onCreated === "function") onCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-4 sm:p-6 mb-6 space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-semibold">Create Ticket</h2>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        rows="3"
        className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          type="submit"
          className="w-full sm:w-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
