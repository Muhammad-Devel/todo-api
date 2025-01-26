const express = require("express");
const {
  addTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} = require("../controller/todoController");

const router = express.Router();

// Get all todos
router.get("/todos", getAllTodos);

// Get a single todo by id
router.get("/todos/:id", getTodoById);

// Create a new todo
router.post("/todos", addTodo);

// Update a todo by id
router.put("/todos/:id", updateTodo);

// Delete a todo by id
router.delete("/todos/:id", deleteTodo);

module.exports = router;
