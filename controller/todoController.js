const fs = require("fs");
const path = require("path");
const todosFilePath = path.join(__dirname, "../data/todos.json");

exports.addTodo = (todo) => {
  fs.readFile(todosFilePath, (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    todos.push(todo);
    fs.writeFile(todosFilePath, JSON.stringify(todos), (err) => {
      if (err) throw err;
      console.log("Todo added successfully");
    });
  });
};
