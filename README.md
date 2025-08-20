# 🎫 Ticketing App

A **full-stack responsive support ticketing application** built with **React (Vite + Tailwind CSS)** on the frontend and **Node.js + Express + PostgreSQL (Prisma)** on the backend.  
Deployed live on **Vercel**: [ticketing-app-2dyp.vercel.app](https://ticketing-app-2dyp.vercel.app)

---

## 🚀 Features

- **Login (Mock)** – no real authentication, just a simple username/password form.
- **Create Ticket** – users can submit support tickets with:
  - Title
  - Description
  - Priority (Low / Medium / High)
- **View Tickets** – users can view all tickets in a list/table.
- **Update Ticket** – change ticket status to:
  - In Progress
  - Closed
- **Delete Ticket** – remove a ticket from the system.
- **Mobile-First Responsive Design** with Tailwind CSS.
- **State Management** using React Context API.
- **RESTful API** with Express + PostgreSQL (via Prisma ORM).

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API

### Backend
- Node.js + Express
- PostgreSQL
- Prisma ORM

### Deployment
- Frontend: Vercel  
- Backend: (local / can be deployed to Render or Railway)

---

     ## 📂 Project Structure
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


**⚡ Setup Instructions**

### 1. Clone Repository
--sh
git clone https://github.com/YOUR_USERNAME/ticketing-app.git
cd ticketing-app

2. Setup Backend
cd backend
npm install


Configure .env file:

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/ticketing"
PORT=5000


Run database migrations:

npx prisma migrate dev


Start server:

npm start


Backend runs on http://localhost:5000

3. Setup Frontend
cd ../frontend
npm install
npm run dev


Frontend runs on http://localhost:5173

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

🌍 Live Demo
🔗 ticketing-app-2dyp.vercel.app


🚀 Deployment

Frontend → Vercel
 → ticketing-app-2dyp.vercel.app

Backend → Run locally (can be deployed to Render or Railway)

✅ Future Improvements

Add real authentication with JWT

Add user roles (admin / user)

Pagination & filtering for tickets

Deployment of backend on Render or Railway

💡 Author: KALAIMANI B
📧 Contact: kalaimanib27@gmail.com

### 1️⃣ Clone Repository
```bash
git clone https://github.com/kalaimani-coder/ticketing-app.git
cd ticketing-app
