const mongoose = require("mongoose");
const { Schema } = mongoose;

const subtaskSchema = new Schema({
  title: String,
  completed: { type: Boolean, default: false },
  dateDue: Number
});

module.exports = subtaskSchema;