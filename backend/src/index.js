import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 👋 Root test route
app.get("/", (_req, res) => {
  console.log("✅ API health check hit");
  res.send("API is running 🚀");
});

// POST /api/tickets - create ticket
app.post("/api/tickets", async (req, res) => {
  try {
    const { title, description, priority = "Low" } = req.body;
    console.log("📩 Incoming ticket create request:", req.body);

    if (!title || !description) {
      console.log("❌ Missing fields");
      return res.status(400).json({ error: "Missing fields" });
    }

    const ticket = await prisma.ticket.create({
      data: { title, description, priority },
    });

    console.log("✅ Ticket created:", ticket);
    res.status(201).json(ticket);
  } catch (e) {
    console.error("🔥 Server error:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/tickets - list tickets
app.get("/api/tickets", async (_req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log("📤 Sending tickets:", tickets);
    res.json(tickets);
  } catch (e) {
    console.error("🔥 Error fetching tickets:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/tickets/:id - update ticket
app.put("/api/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, title, description, priority } = req.body;

    console.log(`🔄 Update request for ticket ${id}:`, req.body);

    const ticket = await prisma.ticket.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(title && { title }),
        ...(description && { description }),
        ...(priority && { priority }),
      },
    });

    console.log("✅ Ticket updated:", ticket);
    res.json(ticket);
  } catch (e) {
    console.error("❌ Ticket not found or update failed:", e.message);
    res.status(404).json({ error: "Not found" });
  }
});

// Mock login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    console.log("Login request:", username, password);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
