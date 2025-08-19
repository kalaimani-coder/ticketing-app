import { useEffect, useState } from "react";
import Login from "./components/Login";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user, setUser } = useAuth(); // ✅ get setUser from context
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await fetch("http://localhost:5000/api/tickets");
    const data = await res.json();
    setTickets(data);
  };

  useEffect(() => {
    if (user) fetchTickets();
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!user ? (
        <Login onLogin={setUser} />   /* ✅ Pass setUser here */
      ) : (
        <>
          <TicketForm onCreated={fetchTickets} />
          <TicketList tickets={tickets} fetchTickets={fetchTickets} />
        </>
      )}
    </div>
  );
}
