const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Project = mongoose.model("projects");

module.exports = app => {
  app.get("/api/project/", requireLogin, async (req, res) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
  });

  app.post("/api/project/new", requireLogin, async (req, res) => {
    const { title, description, dateDue } = req.body;

    const project = await new Project({
      title,
      description,
      dateCreated: new Date().getTime(),
      dateDue,
      _user: req.user.id
    }).save();

    res.send(project);
  });

  app.post("/api/project/edit", requireLogin, async (req, res) => {
    const { projectID, title, description, dateDue } = req.body;

    await Project.findByIdAndUpdate(projectID, {
      $set: { title, description, dateDue }
    });

    //returns edited project
    const project = await Project.findById(projectID);

    res.send(project);
  });

  app.post("/api/project/delete", requireLogin, async (req, res) => {
    const { projectID } = req.body;

    const project = await Project.findByIdAndDelete(projectID);

    res.send(project);
  });
};
