const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Project = mongoose.model("projects");
const Feature = mongoose.model("features");
const Comment = mongoose.model("comments");

module.exports = app => {
  app.get("/api/projects/", async (req, res) => {
    const projects = await Project.find({ _user: req.user.id }).populate(
      "_user"
    );
    res.send(projects);
  });

  app.post("/api/projects/main", async (req, res) => {
    const { page, projectsPerPage } = req.body;

    const projects = await Project.find()
      .skip((page - 1) * projectsPerPage)
      .populate("_user")
      .sort({ dateCreated: -1 })
      .limit(projectsPerPage);

    const count = await Project.countDocuments();

    res.send({projects, count});
  });

  app.post("/api/project", async (req, res) => {
    const { projectId } = req.body;

    const project = await Project.findById(projectId).populate("_user");

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
    const { projectId } = req.body;

    const set = { ...req.body };
    delete set.projectId;

    await Project.findByIdAndUpdate(projectId, {
      $set: set
    });

    //returns edited project
    const project = await Project.findById(projectId);

    res.send(project);
  });

  app.post("/api/project/delete", requireLogin, async (req, res) => {
    const { projectId } = req.body;
    await Feature.deleteMany({ _project: projectId });
    await Comment.deleteMany({ _project: projectId });

    const project = await Project.findByIdAndDelete(projectId);

    res.send(project);
  });
};
