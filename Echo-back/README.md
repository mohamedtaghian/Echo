# Echo — Backend

A lightweight mock REST API server powering the Echo blogging platform. Built with **json-server** and **json-server-auth**, it provides full authentication (register/login with JWT) and CRUD operations for blog posts.

---

## Tech Stack

| Tool                                                                       | Purpose                        |
| -------------------------------------------------------------------------- | ------------------------------ |
| [json-server](https://github.com/typicode/json-server) `^0.17.4`           | REST API from a flat JSON file |
| [json-server-auth](https://github.com/jeremyben/json-server-auth) `^2.1.0` | JWT authentication middleware  |

---

## Project Structure

```
Echo-back/
├── db.json          # Database — users & posts collections
└── package.json     # Dependencies & scripts
```

### `db.json` Schema

```json
{
  "users": [
    {
      "id": 1,
      "name": "string",
      "email": "string",
      "password": "bcrypt-hashed string"
    }
  ],
  "posts": [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "imageUrl": "string (URL)",
      "userId": 1,
      "authorName": "string"
    }
  ]
}
```

---

## Getting Started

### Prerequisites

- Node.js `>=14`
- npm

### Installation

```bash
cd Echo-back
npm install
```

### Running the Server

```bash
npm run dev
```

The server starts at **`http://localhost:3000`**.

---

## API Reference

### Authentication

Handled by `json-server-auth`. Passwords are stored as bcrypt hashes.

| Method | Endpoint    | Body                        | Description                   |
| ------ | ----------- | --------------------------- | ----------------------------- |
| `POST` | `/register` | `{ name, email, password }` | Create a new user account     |
| `POST` | `/login`    | `{ email, password }`       | Login and receive a JWT token |

**Response (login & register):**

```json
{
  "accessToken": "<JWT>",
  "user": { "id": 1, "name": "...", "email": "..." }
}
```

### Posts

Protected routes require the `Authorization: Bearer <token>` header.

| Method   | Endpoint     | Auth Required | Description             |
| -------- | ------------ | :-----------: | ----------------------- |
| `GET`    | `/posts`     |      ❌       | Fetch all posts         |
| `POST`   | `/posts`     |      ✅       | Create a new post       |
| `PUT`    | `/posts/:id` |      ✅       | Replace a post          |
| `PATCH`  | `/posts/:id` |      ✅       | Partially update a post |
| `DELETE` | `/posts/:id` |      ✅       | Delete a post           |

**Create / Update post body:**

```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "userId": 1,
  "authorName": "string"
}
```

---

## Notes

- `json-server-auth` enforces ownership: only the user who created a resource can modify or delete it (matched by `userId`).
- The `db.json` file acts as the persistent store — all data changes are written directly to it.
- For production use, replace `json-server` with a real backend (Express, NestJS, etc.) and a proper database.
