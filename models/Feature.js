const mongoose = require("mongoose");
const { Schema } = mongoose;
const subtaskSchema = require("./Subtask");

const featureSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Number,
  dateDue: Number,
  subtasks: { type: [subtaskSchema], default: [] },
  completed: {type: Boolean, default: false},
  _project: { type: Schema.Types.ObjectId, ref: "projects" },
  _user: { type: Schema.Types.ObjectId, ref: "users" },
});

mongoose.model("features", featureSchema);
