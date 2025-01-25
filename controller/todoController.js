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

exports.addTodo = (todo) => {
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
    todos.push(todo);

    // Write the updated todos back to the file
    fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
      if (err) throw err;
      console.log("Todo added successfully");
    });
  });
};
