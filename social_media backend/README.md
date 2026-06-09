# Task Management System

## Features

- User Registration
- User Login with JWT Authentication
- Create Task
- View Tasks
- Update Task
- Delete Task
- MongoDB Database Integration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository
2. Run:

npm install

3. Configure .env file

4. Start server:

node server.js

5. Open frontend/index.html

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Tasks

- POST /api/tasks
- GET /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
