const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Comment = mongoose.model("comments");

module.exports = app => {
  app.post("/api/comments/", async (req, res) => {
    const { featureId } = req.body;

    const comments = await Comment.find({ _feature: featureId });
    res.send(comments);
  });

  app.post("/api/comment/", async (req, res) => {
    const { commentId } = req.body;

    const comment = await Comment.findById(commentId);
    res.send(comment);
  });

  app.post("/api/comment/new", async (req, res) => {
    const { commentId, body, username } = req.body;

    const comment = await new Comment({
      body,
      username,
      dateCreated: new Date().getTime(),
      _feature: featureId
    }).save();

    res.send(comment);
  });

  // do not use until user comments are implemented
  app.post("/api/comment/edit", requireLogin, async (req, res) => {
    // gets commentId, reduxForm, user of comment from req
    const { commentId, body, user } = req.body;

    if (user !== req.user) {
      res.send("You cannot edit this comment!");
    } else {
      await Comment.findByIdAndUpdate(commentId, {
        $set: { body }
      });

      //returns edited feature
      const comment = await comment.findById(commentId);

      res.send(comment);
    }
  });

  app.post("/api/comment/approve", requireLogin, async (req, res) => {
    // gets comment from req
    const { approved } = req.body;
    const commentId = req.body._id;

    const comment = await Comment.findById(commentId)

    comment.approved = !comment.approved;
    if(comment.approved) {
      comment.dateApproved = new Date().getTime();
    }
    await comment.save();

    res.send(comment);
  });

  app.post("/api/comment/delete", requireLogin, async (req, res) => {
    // body is comment object1
    const { commentId, user } = req.body;

    if (user._id !== req.user.id) {
      res.send("Cannot delete this comment");
    } else {
      const comment = await Comment.findByIdAndDelete(commentId);

      res.send(comment);
    }
  });
};
