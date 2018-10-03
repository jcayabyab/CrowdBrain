const mongoose = require("mongoose");
const { Schema } = mongoose;

const starSchema = new Schema({
  _project: {type: Schema.Types.ObjectId, ref: "projects"},
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("stars", starSchema);