const express = require("express");
const { addTodo } = require("../controller/todoController");

const router = express.Router();

// Mock data
let todos = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Learn Node.js", completed: false },
];

// Get all todos
router.get("/todos", (req, res) => {
  res.json(todos);
});

// Get a single todo by id
router.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

// Create a new todo
router.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: req.body.completed || false,
  };
  addTodo(newTodo);
  res.status(201).json(newTodo);
});

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
