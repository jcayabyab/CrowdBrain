const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Comment = mongoose.model("comments");

module.exports = app => {
  app.get("/api/comment/", async (req, res) => {
    const { featureID } = req.body;

    const comments = await Feature.find({ _feature: featureID });
    res.send(comments);
  });

  app.post("/api/comment/new", async (req, res) => {
    const { featureID, body, username } = req.body;

    const feature = await new Feature({
      body,
      username,
      dateCreated: new Date().getTime(),
      _feature: featureID
    }).save();

    res.send(feature);
  });

  // do not use until user comments are implemented
  app.post("/api/comment/edit", requireLogin, async (req, res) => {
    // gets commentID, reduxForm, user of comment from req
    const { commentID, body, user } = req.body;

    if (user !== req.user) {
      res.send("You cannot edit this comment!");
    } else {
      await Comment.findByIdAndUpdate(commentID, {
        $set: { body }
      });

      //returns edited feature
      const comment = await comment.findById(commentID);

      res.send(comment);
    }
  });

  app.post("/api/comment/approve", requireLogin, async (req, res) => {
    // gets comment from req
    const { approved } = req.body;
    const commentID = req.body._id;

    await Comment.findByIdAndUpdate(commentID, {
      $set: { approved: !approved }
      // add date approved only when true
    });

    //returns edited feature
    const comment = await comment.findById(commentID);

    res.send(comment);
  });

  app.post("/api/comment/delete", requireLogin, async (req, res) => {
    // body is comment object1
    const { commentID, user } = req.body;

    if (user._id !== req.user.id) {
      res.send("Cannot delete this comment");
    } else {
      const comment = await Comment.findByIdAndDelete(commentID);

      res.send(comment);
    }
  });
};
