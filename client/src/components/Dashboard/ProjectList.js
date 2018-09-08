import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getProjects, createProject } from "../../actions/projectActions";
import ProjectListItem from "./ProjectListItem";
import LoadingWheel from "../utils/LoadingWheel";
import AddButton from "../utils/AddButton";

class ProjectList extends Component {
  renderList() {
    if (this.props.projects.notLoaded) {
      return <LoadingWheel />;
    }
    return (
      <div>
        {_.map(this.props.projects, project => (
          <ProjectListItem key={project._id} project={project} />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          {_.isEmpty(this.props.projects) && (
            <div>Create a new project here: </div>
          )}
          <AddButton onClick={() => this.props.createProject()} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(
  mapStateToProps,
  { getProjects, createProject }
)(ProjectList);
