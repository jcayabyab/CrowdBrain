const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");

module.exports = app => {
  app.post("/api/feature/subtask/new", requireLogin, async (req, res) => {
    const { featureId } = req.body;

    const feature = await Feature.findById(featureId);
    feature.subtasks.push({ title: "New Subtask" });
    feature.save();

    res.send(feature);
  });

  app.post("/api/feature/subtask/edit", requireLogin, async (req, res) => {
    // handle formatting on front-end action creator
    const { featureId, subtaskId, title /*, dateDue*/ } = req.body;

    await Feature.findOneAndUpdate(
      { _id: featureId, "subtasks._id": subtaskId },
      {
        $set: {
          "subtasks.$.title": title,
          // "subtasks.$.dateDue": dateDue
        }
      }
    );

    const feature = await Feature.findById(featureId);

    res.send(feature);
  });

  app.post("/api/feature/subtask/delete", requireLogin, async (req, res) => {
    const { featureId, subtaskId } = req.body;

    const feature = await Feature.findById(featureId);
    await feature.subtasks.id(subtaskId).remove();
    await feature.save();

    res.send(feature);
  });

  app.post("/api/feature/subtask/toggle", requireLogin, async (req, res) => {
    // handle formatting on front-end action creator
    const { featureId, subtaskId } = req.body;

    const feature = await Feature.findOne({ _id: featureId });
    const subtask = feature.subtasks.id(subtaskId);

    subtask.completed = !subtask.completed;
    await feature.save();

    res.send(feature);
  });
};
