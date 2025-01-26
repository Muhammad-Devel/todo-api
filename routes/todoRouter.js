const express = require("express");
const {
  addTodo,
  getAllTodos,
  getTodoById,
} = require("../controller/todoController");

const router = express.Router();

// Get all todos
router.get("/todos", getAllTodos);

// Get a single todo by id
router.get("/todos/:id", getTodoById);

// Create a new todo
router.post("/todos", addTodo);

// Update a todo by id
router.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");

  todo.task = req.body.task;
  todo.completed = req.body.completed;
  res.json(todo);
});

// Delete a todo by id
router.delete("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send("Todo not found");

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

module.exports = router;
