const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  body: String,
  approved: {type: Boolean, default: false},
  _user: {type: Schema.types.ObjectId, ref: "users"},
  _feature: {type: Schema.types.ObjectId, ref: "features"}
});

mongoose.model("comments", commentSchema);