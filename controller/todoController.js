const fs = require("fs");
const path = require("path");
const todosFilePath = path.join(__dirname, "../data/todos.json");

// Ensure the directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true }); // Create directory if it doesn't exist
  }
};

// Get all todos
exports.getAllTodos = (req, res) => {
  ensureDirectoryExists(todosFilePath);

  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
};

// Get a single todo by id
exports.getTodoById = (req, res) => {
  ensureDirectoryExists(todosFilePath);

  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).send("Todo not found");

    res.json(todo);
  });
};
// Add a new todo
exports.addTodo = (req, res) => {
  const newTodo = {
    task: req.body.task,
    completed: req.body.completed || false,
  };
  ensureDirectoryExists(todosFilePath);

  // Check if file exists
  if (!fs.existsSync(todosFilePath)) {
    // If file doesn't exist, create it with an empty array
    fs.writeFileSync(todosFilePath, JSON.stringify([]), (err) => {
      if (err) throw err;
    });
  }

  // Read the current todos
  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;

    // Parse the existing todos
    let todos = JSON.parse(data);

    // Add the new todo to the array
    todos.push({ id: todos.length + 1, ...newTodo });

    // Write the updated todos back to the file
    fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
      if (err) throw err;
      console.log("Todo added successfully");
      res.status(201).json("Todo added successfully");
    });
  });
};

// Update a todo by id
exports.updateTodo = (req, res) => {
  ensureDirectoryExists(todosFilePath);

  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json("Todo not found");

    todo.task = req.body.task;
    todo.completed = req.body.completed || false;

    fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
      if (err) throw err;
      res.json("todo updated successfully");
    });
  });
};

// Delete a todo by id
exports.deleteTodo = (req, res) => {
  ensureDirectoryExists(todosFilePath);

  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;

    let todos = JSON.parse(data);
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json("Todo not found");

    todos = todos.filter((t) => t.id !== parseInt(req.params.id));

    fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
      if (err) throw err;
      res.json("Todo deleted successfully");
    });
  });
};
