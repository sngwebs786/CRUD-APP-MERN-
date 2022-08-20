const express = require("express");
const router = express.Router();
const {
  addTodo,
  editTodo,
  deleteTodo,
  deleteAllTodos,
  showTodos,
} = require("../controllers/todoControllers");

router.post("/addTodo", addTodo);
router.post("/editTodo", editTodo);
router.get("/showTodos", showTodos);
router.post("/deleteTodo", deleteTodo);
router.post("/deleteAllTodos", deleteAllTodos);

module.exports = router;
