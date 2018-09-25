const mongoose = require("mongoose");
const { Schema } = mongoose;
const subtaskSchema = require("./Subtask");

const featureSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Number,
  dateDue: Number,
  subtasks: { type: [subtaskSchema], default: [] },
  _project: { type: Schema.Types.ObjectId, ref: "projects" },
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

featureSchema.set("toObject", { virtuals: true });
featureSchema.set("toJSON", { virtuals: true });

featureSchema.virtual("completed").get(function() {
  if(this.subtasks) {
    return this.subtasks.filter(subtask => subtask.completed === false).length === 0;
  }
  return false;
});

mongoose.model("features", featureSchema);
