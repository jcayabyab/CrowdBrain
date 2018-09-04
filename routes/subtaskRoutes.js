const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Feature = mongoose.model("features");

module.exports = app => {
  app.post("/api/feature/subtask/new", requireLogin, async (req, res) => {
    const { featureID } = req.body;

    const feature = await Feature.findById(featureID);
    feature.subtasks.push({ title: "New Subtask" });
    feature.save();

    res.send(feature);
  });

  app.post("/api/feature/subtask/edit", requireLogin, async (req, res) => {
    // handle formatting on front-end action creator
    const { featureID, _id, title, dateDue } = req.body;

    await findOneAndUpdate(
      { _id: featureID, "subtasks._id": _id },
      {
        $set: {
          "subtasks.$.title": title,
          "subtasks.$.dateDue": dateDue
        }
      }
    );

    const feature = findById(featureID);

    res.send(feature);
  });

  app.post("/api/feature/subtask/delete", requireLogin, async (req, res) => {
    const { featureID, subtaskID } = req.body;

    const feature = await Feature.findById(featureID);
    await feature.subtasks.id(subtaskID).remove();
    await feature.save();

    res.send(feature);
  });

  app.post("/api/feature/subtask/toggle", requireLogin, async (req, res) => {
    // handle formatting on front-end action creator
    const { featureID, subtaskID } = req.body;

    const subtask = await find({ _id: featureID, "subtasks._id": subtaskID });
    subtask.completed = !subtask.completed;
    await subtask.save();

    const feature = await findById(featureID);

    res.send(feature);
  });
};
