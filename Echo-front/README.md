# Echo — Frontend

The React client for the Echo blogging platform. A dark-themed, responsive SPA where users can browse posts, register/login, and publish or manage their own content.

---

## Tech Stack

| Library                                                             | Version   | Purpose                 |
| ------------------------------------------------------------------- | --------- | ----------------------- |
| [React](https://react.dev/)                                         | `^19.2.4` | UI library              |
| [Vite](https://vitejs.dev/)                                         | `^8.0.4`  | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/)                        | `^7.14.0` | Client-side routing     |
| [Axios](https://axios-http.com/)                                    | `^1.15.0` | HTTP requests           |
| [React Hook Form](https://react-hook-form.com/)                     | `^7.72.1` | Form state management   |
| [Zod](https://zod.dev/)                                             | `^4.3.6`  | Schema validation       |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | `^5.2.2`  | Zod ↔ RHF bridge        |
| [Tailwind CSS](https://tailwindcss.com/)                            | `^4.2.2`  | Utility-first styling   |
| [React Hot Toast](https://react-hot-toast.com/)                     | `^2.6.0`  | Toast notifications     |

---

## Project Structure

```
Echo-front/
├── public/                        # Static assets
├── src/
│   ├── assets/                    # Images & SVGs
│   ├── components/
│   │   ├── BlogCard/              # Post card component
│   │   └── NavBar/                # Top navigation bar
│   ├── pages/
│   │   ├── Authentication/        # Login & Register (tabbed)
│   │   ├── Home/                  # Post feed with delete support
│   │   ├── AddPost/               # Create new post form
│   │   ├── EditPost/              # Edit existing post form
│   │   └── Layout/                # Root layout wrapper
│   ├── providers/
│   │   └── AuthProvider/          # Global auth context & handlers
│   ├── ProtectedRoutes/
│   │   ├── LoginProtectedRoute/   # Redirects logged-in users away from /auth
│   │   └── EditAddProtectedRoute/ # Requires auth to access /add-post & /edit-post
│   ├── App.jsx                    # Router configuration
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── vite.config.js
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm
- Echo backend running on `http://localhost:3000`

### Installation

```bash
cd Echo-front
npm install
```

### Development

```bash
npm run dev
```

App is served at **`http://localhost:5173`** by default.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## Routes

| Path             | Page                    |            Auth Required            |
| ---------------- | ----------------------- | :---------------------------------: |
| `/`              | Home — public post feed |                 ❌                  |
| `/auth`          | Login / Register        | ❌ (redirects if already logged in) |
| `/add-post`      | Create a new post       |                 ✅                  |
| `/edit-post/:id` | Edit an existing post   |                 ✅                  |

---

## Authentication Flow

Auth state is managed globally via **`AuthContext`** (React Context API).

- On login/register, the JWT token and user object are persisted to `localStorage`.
- The context exposes `user`, `handleLogin`, `handleRegister`, `handleLogout`, and `isLoading`.
- Protected routes redirect unauthenticated users to `/auth`.
- The `LoginProtectedRoute` redirects already-authenticated users away from `/auth`.

---

## Key Features

- **Post Feed** — Lists all blog posts with skeleton loading states and optimistic delete.
- **Auth Forms** — Single togglable form for login and registration, validated with Zod schemas.
- **CRUD Posts** — Authenticated users can create, edit, and delete their own posts.
- **Ownership Guards** — Edit/Delete buttons only appear for the post's author.
- **Dark UI** — Glassmorphism-style cards, indigo accents, and smooth transitions.
- **Toast Feedback** — All async operations surface success/error feedback via React Hot Toast.
