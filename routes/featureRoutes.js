const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");

module.exports = app => {
  app.post("/api/features/", requireLogin, async (req, res) => {
    const { projectId } = req.body;

    const features = await Feature.find({ _project: projectId });
    res.send(features);
  });

  app.post("/api/feature/", requireLogin, async (req, res) => {
    const { featureId } = req.body;

    try {
      const feature = await Feature.findById(featureId);
      res.send(feature);
    } catch (err) {
      res.send(err);
    }
  });

  app.post("/api/feature/new", requireLogin, async (req, res) => {
    const { projectId, title, description, dateDue } = req.body;

    const feature = await new Feature({
      title,
      description,
      dateCreated: new Date().getTime(),
      dateDue,
      _project: projectId
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

    const feature = await Project.findByIdAndDelete(featureId);

    res.send(feature);
  });
};
