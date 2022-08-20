const res = require("express/lib/response");
const TodoSchema = require("../models/todoSchema");

// ADD  (DONE)

const addTodo = async (req, res) => {
  const { todo } = req.body; //keep everything(key of object) in separate variable .(Destrucutring)

  const myTodo = await TodoSchema.create({
    todoItem: todo,
  });

  if (myTodo) {
    res.status(201).json({
      todo: myTodo.todo,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
};

const editTodo = async (req, res) => {
  let { data, newValue } = req.body;
  const item = await TodoSchema.findOne({ todoItem: data });
  // console.log("New Value ", newValue);
  // console.log("Porani", item.todoItem);
  // item.update
  const rep = await TodoSchema.replaceOne(
    { todoItem: item.todoItem },
    { todoItem: newValue }
  );
  // console.log(rep);
};

//Delete (DONE)
const deleteTodo = async (req, res) => {
  let { data } = req.body;
  const item = await TodoSchema.deleteOne({ todoItem: data });
  console.log(item);
};

// DELETE ALL (DONE)
const deleteAllTodos = async (req, res) => {
  const item = await TodoSchema.deleteMany();
  console.log(item);
};

const showTodos = async (req, res) => {
  const data = await TodoSchema.find();
  res.status(200).json({
    success: true,
    data,
  });
};

module.exports = { addTodo, editTodo, deleteTodo, deleteAllTodos, showTodos };
