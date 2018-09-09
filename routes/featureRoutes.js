const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");
const Comment = mongoose.model("comments");

module.exports = app => {
  app.post("/api/features/", async (req, res) => {
    const { projectId } = req.body;

    const features = await Feature.find({ _project: projectId });
    res.send(features);
  });

  app.post("/api/feature/", async (req, res) => {
    const { featureId } = req.body;

    try {
      const feature = await Feature.findById(featureId);
      res.send(feature);
    } catch (err) {
      res.send(err);
    }
  });

  app.post("/api/feature/new", requireLogin, async (req, res) => {
    const { projectId } = req.body;

    const feature = await new Feature({
      title: "New Feature",
      description: "Write description here",
      dateCreated: new Date().getTime(),
      dateDue: new Date().getTime(),
      _project: projectId,
      _user: req.user
    }).save();

    res.send(feature);
  });

  app.post("/api/feature/edit", requireLogin, async (req, res) => {
    const { featureId, title, description, dateDue } = req.body;

    await Feature.findByIdAndUpdate(featureId, {
      $set: { title, description, dateDue }
    });

    //returns edited feature
    const feature = await Feature.findById(featureId);

    res.send(feature);
  });

  app.post("/api/feature/delete", requireLogin, async (req, res) => {
    const { featureId } = req.body;

    await Comment.deleteMany({ _feature: featureId });

    const feature = await Feature.findByIdAndDelete(featureId);

    res.send(feature);
  });
};
