# Educational Platform – Backend

Node.js (TypeScript), Express, PostgreSQL, Prisma, JWT, Redis, Cloudinary. Docker-ready.

## Setup

1. **Install dependencies**
   ```bash
   cd backend && npm install
   ```

2. **Environment**
   ```bash
   cp .env.example .env
   ```
   Set at least:
   - `DATABASE_URL` – PostgreSQL connection string
   - `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` – min 16 characters each
   - `FRONTEND_ORIGIN` – e.g. `http://localhost:3000` (for CORS)

3. **Database**
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

4. **Run**
   - Dev: `npm run dev`
   - Prod: `npm run build && npm start`

## Docker

From project root (or from `backend/` if compose is there):

```bash
cd backend
docker-compose up --build
```

Runs: **backend** (port 4000), **postgres** (5432), **redis** (6379).  
Set `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` (and optionally `FRONTEND_ORIGIN`) via env or `.env` before `docker-compose up`.

## API base

- Base URL: `http://localhost:4000/api`
- Auth: JWT in `Authorization: Bearer <token>` or cookie `accessToken`
- Refresh: cookie `refreshToken` or body `refreshToken`

### Auth
- `POST /api/auth/register` – body: name, email, password, role?, bio?
- `POST /api/auth/login` – body: email, password
- `POST /api/auth/logout`
- `GET /api/auth/me` – requires auth
- `POST /api/auth/refresh` – refresh token in cookie or body

### Blogs
- `GET /api/blogs` – query: page, limit, search, published
- `GET /api/blogs/popular` – query: limit
- `GET /api/blogs/:slug`
- `POST /api/blogs` – ADMIN/PROFESSOR; body: title, content, published?
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`
- `POST /api/blogs/:id/comment` – body: content, parentId?
- `POST /api/blogs/:id/like`

### Forums
- `GET /api/forums` – query: page, limit
- `GET /api/forums/:id`
- `POST /api/forums` – body: title, content
- `POST /api/forums/:id/comment` – body: content, parentId?
- `POST /api/forums/:id/like`

### Upload (authenticated)
- `POST /api/upload` – multipart field `file`
- `POST /api/upload/signed-params` – body/query: folder?

### Admin (ADMIN only)
- `GET /api/admin/users` – query: page, limit
- `GET /api/admin/analytics`
- `DELETE /api/admin/user/:id`

## Frontend integration

In the Next.js app set:

- `NEXT_PUBLIC_API_URL=http://localhost:4000/api` (or your backend URL)

Backend CORS uses `FRONTEND_ORIGIN`; set it to your frontend origin (e.g. `http://localhost:3000`) so cookies and requests are allowed.
