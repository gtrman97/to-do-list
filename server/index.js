const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a todo

app.post("./todos", async (req, res) => {
  try {



  } catch (error) {
    console.log(error.message);
  }
});

// Get all todos

// Get a todo

// Update a todo

// Delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
