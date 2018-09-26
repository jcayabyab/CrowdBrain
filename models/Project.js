const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Number,
  dateDue: Number,
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  completed: {type: Boolean, default: false}
});

mongoose.model("projects", projectSchema);