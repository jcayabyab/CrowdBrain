const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");

module.exports = app => {
  app.get("/api/feature/", requireLogin, async (req, res) => {
    const { projectID } = req.body;

    const features = await Feature.find({ _project: projectID });
    res.send(features);
  });

  app.post("/api/feature/new", requireLogin, async (req, res) => {
    const { projectID, title, description, dateDue } = req.body;

    const feature = await new Feature({
      title,
      description,
      dateCreated: new Date().getTime(),
      dateDue,
      _project: projectID
    }).save();

    res.send(feature);
  });

  app.post("/api/feature/edit", requireLogin, async (req, res) => {
    const { featureID, title, description, dateDue } = req.body;

    await Feature.findByIdAndUpdate(featureID, {
      $set: { title, description, dateDue }
    });

    //returns edited feature
    const feature = await Feature.findById(featureID);

    res.send(feature);
  });

  app.post("/api/feature/delete", requireLogin, async (req, res) => {
    const { featureID } = req.body;

    const feature = await Project.findByIdAndDelete(featureID);

    res.send(feature);
  });
};
