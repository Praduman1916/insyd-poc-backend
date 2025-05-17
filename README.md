```markdown
# Insyd Notification POC (Backend)

**Live Demo**: [https://insyd-poc-frontend.vercel.app](https://insyd-poc-frontend-git-main-praduman1916s-projects.vercel.app/)


## Repository
```bash
git clone https://github.com/Praduman1916/insyd-poc-backend
cd insyd-poc-backend
```

## Quick Start

1. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```
Server will run on `http://localhost:8080`

## Technology Stack
- Node.js 
- Express.js
- Sequelize ORM (MySQL)
- Socket.IO

## Project Structure
```
src/
├── controllers/   # Request handlers
├── services/      # Business logic
├── models/        # Data models
├── migrations/    # Database migrations
├── routes/        # API endpoints
└── utils/         # Helper functions
```

## API Documentation

### Notifications
- `POST /api/v1/notifications`
  - Creates a new notification
  - Request body: { message: string }

- `GET /api/v1/notifications`
  - Returns paginated notifications
  - Query params: page, limit

## Environment Variables
```env
MYSQLHOST=your_database_host
MYSQLUSER=your_db_username
MYSQLPASSWORD=your_db_password
MYSQLDATABASE=your_db_name
MYSQLPORT=your_db_port
PORT=9000
```


