# Todo API

This is a simple Todo API built with Node.js that allows users to manage a list of todos. The API provides endpoints to add, retrieve, update, and delete todos, and stores the todos in a JSON file.

## Features

- Add new todos
- Retrieve all todos
- Update existing todos
- Delete todos

## Technologies

- Node.js
- Express.js
- File system (fs)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-api.git

2. Navigate to the project directory:
   ```bash
   cd todo-api
   
3. Install dependencies:
   ```bash
   npm install

4. Start the server
   ```bash
   npm start

Buy default, the server runs on http://localhost:5001

## API Endpoints
Here are the available API endpoints for managing todos:
### 1.Add new Todo
- #### Endpoint:
   ```method
   POST /api/todos

- #### Description:
   Add a new todo to the list

- #### Request Body:
  ```json
     {
     "task": "Learn Node.js",
     "completed": false
     }

### 2.Get All Todos

- ### Endpoint:
   ```method
   GET /api/todos
