# Project Manager

A Jira-style project management app: a Next.js client and an Express + Prisma API on PostgreSQL.

## Features

- **Project views:** drag-and-drop Kanban board, list, table (MUI Data Grid) and Gantt timeline
- **Tasks:** create tasks, move them between statuses, filter by priority (urgent, high, medium, low, backlog)
- **Dashboard:** project and task charts (Recharts)
- **Search** across projects, tasks and users
- **Teams and users** directory pages
- Dark mode, with UI state persisted via Redux Persist

There is no authentication yet: the API is open and the `cognitoId` field on users is unused.

## Stack

- **Client:** Next.js 14, TypeScript, Redux Toolkit + RTK Query, Tailwind CSS, MUI, react-dnd, gantt-task-react
- **Server:** Express, TypeScript, Prisma, PostgreSQL

## Getting started

Requires Node.js 18+ and a PostgreSQL database.

**1. API**

```bash
cd server
npm install
```

Create `server/.env`:

```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/project_manager
PORT=8000
```

```bash
npx prisma migrate dev   # create tables
npm run seed             # load sample data from prisma/seedData
npm run dev              # http://localhost:8000
```

**2. Client**

```bash
cd client
npm install
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:8000" > .env.local
npm run dev              # http://localhost:3000
```

## API

| Method | Path | Purpose |
|---|---|---|
| GET, POST | `/projects` | List or create projects |
| GET, POST | `/tasks?projectId=` | List or create tasks |
| PATCH | `/tasks/:taskId/status` | Move a task to a new status |
| GET | `/tasks/user/:userId` | Tasks assigned to or authored by a user |
| GET | `/search?query=` | Search projects, tasks and users |
| GET | `/users`, `/teams` | Directory data |
