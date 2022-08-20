const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    todoItem: {
      type: String,
      required: true,
    }   
  }
);


const TodoSchema = mongoose.model("Todo", todoSchema);

module.exports = TodoSchema;
