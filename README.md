#  Me-API Playground/ Task

A full-stack project that exposes a candidate profile through a simple **REST API** with a **React + Tailwind frontend**.  
It demonstrates **CRUD APIs, MongoDB schema design, and frontend integration**.

---

##  Features

### Backend (Node.js + Express + MongoDB)
- `GET /api/health` → Liveness check
- `GET /api/profile` → Fetch candidate profile
- `POST /api/profile` → Create profile
- `PUT /api/profile` → Update profile
- `GET /api/skills?skill=React` → Query profile by skill
- `GET /api/projects` → List all projects
- Seed database with real data (`npm run seed`)

### Frontend (React + Tailwind)
- **Home page**: Search profile by skill
- **Profile page**: View personal details
- **Projects page**: Browse projects with links
- Calls live backend APIs

---

##  Architecture

