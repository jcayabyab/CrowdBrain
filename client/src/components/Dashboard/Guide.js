import React from "react";
import styled from "styled-components";

import Guide1 from "./GuideAssets/Guide1.PNG";
import Guide2 from "./GuideAssets/Guide2.PNG";
import Guide3 from "./GuideAssets/Guide3.PNG";
import Guide4 from "./GuideAssets/Guide4.PNG";

const Image = styled.img`
  display: block;
  margin: 10px auto;
  max-width: 100%;
  border: 2px #9cf solid;
`;

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
      plus button on your left.
    </p>
    <Image className="rounded img-fluid" src={Guide1} alt="Adding a project" />
    <p>
      Clicking on this new project will bring you to the project page where you
      can change the title, description and its due date. Clicking on an edit
      button will bring up an editable field.
    </p>
    <Image className="rounded img-fluid" src={Guide2} alt="Editing a project" />
    <Image className="rounded img-fluid" src={Guide3} alt="Project fields" />
    <h6>Sharing your project</h6>
    <p>
      Sharing your project is simple: just copy your project link. Then users
      will be able to look around your project and leave any comments they would
      like to.
    </p>
    <h5>Features</h5>
    <p>
      Inside of projects, you can also create features by clicking the add
      button, and can be edited in a similar manner to projects. Inside of these
      features, you can create subtasks that can be marked for completion. At
      the bottom, other users can leave comments and feedback on your ideas and
      tasks. You can click on the like button to like their comment.
    </p>
    <Image className="rounded img-fluid" src={Guide4} alt="Feature info" />

  </div>
);

export default Guide;
