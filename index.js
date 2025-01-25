const express = require("express");

//the app object is an instance of express
const app = express();
const PORT = process.env.PORT || 5000; //the port the express app will listen to
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// listening the port
app.listen(PORT, () => {
  console.log(`Server ${PORT}da ishlamoqda...`);
});
