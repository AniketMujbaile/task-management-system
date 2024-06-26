# task-management-system

Develop a RESTful API using Node.js that allows users to manage tasks. The system should support creating, retrieving, updating, and deleting tasks. Each task should have a title, description, creation date, and status (e.g., pending, in progress, completed).

## 🔗 Hosted link

Postman API Testing Documentation: [API Documentation](https://documenter.getpostman.com/view/24632237/2sA3BuUo5W)

## Technologies Used

- Node.js
- Express.js
- MongoDB
 
## Configuration File

1. Create a MongoDB database and update the connection details in `.env`.

```ENV

PORT=5000

DATABASE_URL=YOUR_URL

JWT_SECRET=YOUR_KEY
 
```
## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
npm start
```

## Endpoints

- `POST http://localhost:5000/tasks`: API to Create a new Task

- `GET http://localhost:5000/tasks`: API to Retrieve all tasks

- `GET http://localhost:5000/tasks/:id`: API to Retrieve all tasks by ID

- `PUT http://localhost:5000/tasks/:id`: API to Update Tasks by ID

- `DELETE http://localhost:5000/tasks/:id`: API to Delete a Task By ID