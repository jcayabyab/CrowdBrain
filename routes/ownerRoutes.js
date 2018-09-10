const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/owner", async (req, res) => {
    const { userId } = req.body;

    const user = await User.findById(userId);

    res.send(user);
  });
};
