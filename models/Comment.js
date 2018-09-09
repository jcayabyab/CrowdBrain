const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  body: String,
  approved: {type: Boolean, default: false},
  dateApproved: Number,
  dateCreated: Number,
  username: String,
  // _user: {type: Schema.Types.ObjectId, ref: "users"},
  _feature: {type: Schema.Types.ObjectId, ref: "features"},
  _project: {type: Schema.Types.ObjectId, ref: "projects"},
});

mongoose.model("comments", commentSchema);