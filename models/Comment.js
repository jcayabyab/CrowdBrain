const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  body: String,
  approved: {type: Boolean, default: false},
  _user: {type: Schema.Types.ObjectId, ref: "users"},
  _feature: {type: Schema.Types.ObjectId, ref: "features"}
});

mongoose.model("comments", commentSchema);