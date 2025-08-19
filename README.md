🎫 Ticketing App

A mobile-first responsive support ticket application built with React, Node.js, Express, PostgreSQL, and TailwindCSS.
Users can create, view, and update support tickets. The app is deployed on Vercel for frontend hosting.

🔗 Live Demo: ticketing-app-2dyp.vercel.app

**📌 Features

Frontend (React.js + TailwindCSS)**

🔐 Mock Login (username + password, no real authentication required)

📝 Create Ticket (form with Title, Description, Priority dropdown)

📋 View Tickets (list of tickets with status and priority)

🔄 Update Ticket Status (In Progress / Closed)

📱 Mobile-first responsive design

**Backend (Node.js + Express + PostgreSQL)
**
POST /api/tickets → Create new ticket

GET /api/tickets → Fetch all tickets

PUT /api/tickets/:id → Update ticket status

PostgreSQL schema with Prisma ORM

**Bonus**

Context API for managing authentication state

Deployment with Vercel (frontend)

**🛠️ Tech Stack

Frontend**

React.js (Vite)

TailwindCSS (mobile-first design)

**Backend**

Node.js + Express

PostgreSQL (with Prisma ORM)

**Deployment**

Frontend → Vercel

Backend → (local for now, can extend to Render/Railway)

**📂 Project Structure**
ticketing-app/
│
├── frontend/             # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/   # Login, TicketForm, TicketList
│   │   ├── context/      # AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/              # Node.js + Express backend
│   ├── prisma/           # Prisma schema
│   ├── server.js         # API endpoints
│   └── package.json
│
├── screenshots/          # Screenshots for README
│   ├── login-desktop.png
│   ├── login-mobile.png
│   ├── tickets-desktop.png
│   └── tickets-mobile.png
│
└── README.md             # Documentation

⚙️ Setup Instructions
1️⃣ Clone Repo
git clone https://github.com/<your-username>/ticketing-app.git
cd ticketing-app

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev
App will run at 👉 http://localhost:5173

3️⃣ Backend Setup
cd backend
npm install
npx prisma migrate dev --name init
npm start
API runs at 👉 http://localhost:5000

**🗄️ Database Schema
**

| Field       | Type                             |
| ----------- | -------------------------------- |
| id          | UUID / Serial (Primary)          |
| title       | VARCHAR                          |
| description | TEXT                             |
| priority    | ENUM (Low, Medium, High)         |
| status      | ENUM (Open, In Progress, Closed) |
| created\_at | TIMESTAMP (default now)          |


**Screensots**
## Screenshots

### Login Page
**Desktop**
![Login Desktop](./Screenshots/login-desktop.png)

**Mobile**
![Login Mobile](./Screenshots/login-mobile.png)

### Tickets
**Desktop**
![Tickets Desktop](./Screenshots/tickets-desktop.png)

**Mobile**
![Tickets Mobile](./Screenshots/tickets-mobile.png)


🚀 Deployment

Frontend → Vercel
 → ticketing-app-2dyp.vercel.app

Backend → Run locally (can be deployed to Render or Railway)

✅ Future Improvements

Add real authentication (JWT)

User roles (Admin/Support/User)

Docker setup (frontend + backend)

CI/CD pipeline with GitHub Actions

💡 Author: KALAIMANI B
📧 Contact: kalaimanib27@gmail.com

### 1️⃣ Clone Repository
```bash
git clone https://github.com/kalaimani-coder/ticketing-app.git
cd ticketing-app
