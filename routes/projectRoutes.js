const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Project = mongoose.model("projects");

module.exports = app => {
  app.get("/api/projects/", requireLogin, async (req, res) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
  });

  app.post("/api/project", requireLogin, async (req, res) => {
    const { projectId } = req.body;

    const project = await Project.findById(projectId);

    res.send(project);
  });

  app.post("/api/project/new", requireLogin, async (req, res) => {
    const project = await new Project({
      title: "New Project",
      description: "Write a new description here!",
      dateCreated: new Date().getTime(),
      dateDue: new Date().getTime(),
      _user: req.user.id
    }).save();

    res.send(project);
  });

  app.post("/api/project/edit", requireLogin, async (req, res) => {
    const { projectId, title, description, dateDue } = req.body;

    await Project.findByIdAndUpdate(projectId, {
      $set: { title, description, dateDue }
    });

    //returns edited project
    const project = await Project.findById(projectId);

    res.send(project);
  });

  app.post("/api/project/delete", requireLogin, async (req, res) => {
    const { projectId } = req.body;

    const project = await Project.findByIdAndDelete(projectId);

    res.send(project);
  });
};
