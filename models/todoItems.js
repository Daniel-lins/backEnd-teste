const mongoose = require("mongoose");

//create Schema
const TodoItemSchema = new mongoose.Schema({
  // _id: { type: Number, autoIncrement: true },
  item: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
});

//export this Schema
module.exports = mongoose.model("todo", TodoItemSchema);
