const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Number,
  dateDue: Number,
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("projects", projectSchema);