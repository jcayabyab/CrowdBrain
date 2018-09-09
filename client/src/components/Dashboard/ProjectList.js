import React from "react";
import { connect } from "react-redux";

import { createProject } from "../../actions/projectActions";
import ProjectListItem from "./ProjectListItem";
import List from "../utils/List";

const ProjectList = props => {
  const { projects, createProject } = props;
  const mapFunction = project => (
    <ProjectListItem key={project._id} project={project} />
  );

  return (
    <List
      objects={projects}
      description="Create a new project here: "
      createFunction={() => createProject()}
      mapFunction={mapFunction}
    />
  );
};

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(
  mapStateToProps,
  { createProject }
)(ProjectList);
