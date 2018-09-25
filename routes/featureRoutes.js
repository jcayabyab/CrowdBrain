const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");
const Comment = mongoose.model("comments");

module.exports = app => {
  app.post("/api/features/", async (req, res) => {
    const { projectId } = req.body;

    const features = await Feature.find({ _project: projectId })
      .populate("_user", "_id firstName lastName")
      .populate("_project", "_id title");
    res.send(features);
  });

  app.post("/api/feature/", async (req, res) => {
    const { featureId } = req.body;

    try {
      const feature = await Feature.findById(featureId)
        .populate("_user", "_id firstName lastName")
        .populate("_project", "_id title");
      res.send(feature);
    } catch (err) {
      res.send("Error");
    }
  });

  app.post("/api/feature/new", requireLogin, async (req, res) => {
    const { projectId } = req.body;

    const feature = await new Feature({
      title: "New Feature",
      description: "Write a new description here!",
      dateCreated: new Date().getTime(),
      dateDue: new Date().getTime(),
      _project: projectId,
      _user: req.user
    })
      .save();

    res.send(feature);
  });

  app.post("/api/feature/edit", requireLogin, async (req, res) => {
    const { featureId } = req.body;

    const set = { ...req.body };
    delete set.featureId;

    await Feature.findByIdAndUpdate(featureId, {
      $set: set
    });

    //returns edited feature
    const feature = await Feature.findById(featureId)
      .populate("_user", "_id firstName lastName")
      .populate("_project", "_id title");

    res.send(feature);
  });

  app.post("/api/feature/delete", requireLogin, async (req, res) => {
    const { featureId } = req.body;

    await Comment.deleteMany({ _feature: featureId });

    const feature = await Feature.findByIdAndDelete(featureId);

    res.send(feature);
  });
};
