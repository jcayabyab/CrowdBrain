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

  app.post("/api/feature/subtask/complete", requireLogin, async (req, res) => {
    // handle formatting on front-end action creator
    const { featureID, subtaskID, completed } = req.body;

    await findOneAndUpdate(
      { _id: featureID, "subtasks._id": _id },
      {
        $set: {
          "subtasks.$.completed": !completed
        }
      }
    );

    const feature = findById(featureID);

    res.send(feature);
  });
};
