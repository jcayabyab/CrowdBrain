import React from "react";

const Guide = () => (
  <div style={{ marginTop: "10px" }}>
    <h4 style={{ textAlign: "center" }}>CrowdBrain: Quick Start Guide</h4>
    <p>
      Welcome to CrowdBrain! This website is designed for developers. As you
      develop your idea, you can share your project link with your colleagues
      and userbase in order to get feedback on your ideas.
    </p>
    <h5>Projects</h5>
    <p>
      You can create projects to track features you want implemented and the due
      date of your project. Creating a project is simple: Simply click on the
      plus button on your left. Clicking on this new project will bring you to
      the project page where you can change the title, description and its due
      date.
    </p>
    <p>
      Inside the project page is a title, description, the date the project was
      created, and the date the project is due. All of these can be edited
      except for the created date by clicking the edit button beside the value.
      This brings up an editable form.
    </p>
    <h5>Features</h5>
    <p>
      Inside of projects, you can also create features by clicking the add
      button, and can be edited in a similar manner to projects. Inside of these
      features, you can create subtasks that can be marked for completion. At
      the bottom, other users can leave comments and feedback on your ideas and
      tasks.
    </p>
  </div>
);

export default Guide;
