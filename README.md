# Echo 🖊️

A full-stack blogging platform where users can register, log in, and share stories with the world. Echo features a dark, glassmorphism-styled frontend and a lightweight JSON-based backend with JWT authentication.

---

## Overview

Echo is split into two self-contained workspaces:

| Workspace                    | Stack                          | Port   |
| ---------------------------- | ------------------------------ | ------ |
| [`Echo-back`](./Echo-back)   | json-server + json-server-auth | `3000` |
| [`Echo-front`](./Echo-front) | React 19 + Vite + Tailwind CSS | `5173` |

---

## Features

- **Authentication** — Register and login with JWT. Sessions persist via `localStorage`.
- **Public Feed** — Anyone can browse published blog posts on the homepage.
- **Create & Publish** — Authenticated users can write and publish new posts with a title, description, and cover image.
- **Edit & Delete** — Authors can update or remove their own posts; ownership is enforced on both client and server.
- **Responsive UI** — Mobile-friendly layout with a dark glass aesthetic, skeleton loading states, and toast notifications.

---

## Project Structure

```
Echo/
├── Echo-back/          # Backend — mock REST API
│   ├── db.json         # JSON database (users + posts)
│   └── package.json
└── Echo-front/         # Frontend — React SPA
    ├── src/
    │   ├── pages/      # Home, Auth, AddPost, EditPost
    │   ├── components/ # BlogCard, NavBar
    │   ├── providers/  # AuthProvider (React Context)
    │   └── ProtectedRoutes/
    ├── index.html
    └── package.json
```

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/mohamedtaghian/Echo.git
cd Echo
```

### 2. Start the backend

```bash
cd Echo-back
npm install
npm run dev
# API running at http://localhost:3000
```

### 3. Start the frontend

Open a new terminal:

```bash
cd Echo-front
npm install
npm run dev
# App running at http://localhost:5173
```

Both servers must be running simultaneously for the app to work.

---

## API Overview

| Method   | Endpoint     | Auth | Description        |
| -------- | ------------ | :--: | ------------------ |
| `POST`   | `/register`  |  ❌  | Create account     |
| `POST`   | `/login`     |  ❌  | Login, receive JWT |
| `GET`    | `/posts`     |  ❌  | Fetch all posts    |
| `POST`   | `/posts`     |  ✅  | Create a post      |
| `PATCH`  | `/posts/:id` |  ✅  | Update a post      |
| `DELETE` | `/posts/:id` |  ✅  | Delete a post      |

Protected routes require the header: `Authorization: Bearer <token>`

---

## Author

**Mohamed Taghian** — [GitHub](https://github.com/mohamedtaghian)
