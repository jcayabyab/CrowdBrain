import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getProjects, createProject } from "../../actions/projectActions";
import ProjectListItem from "./ProjectListItem";
import LoadingWheel from "../utils/LoadingWheel";
import AddButton from "../utils/AddButton";

class ProjectList extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  renderProjects() {
    if (_.isEmpty(this.props.projects)) {
      return (
        <div style={{ padding: "20px 0px" }}>
          <LoadingWheel style={{ margin: "0 auto" }} size="40" />
        </div>
      );
    }
    return (
      <div>
        {_.map(this.props.projects, project => (
          <ProjectListItem key={project._id} project={project} />
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AddButton
            onClick={() => this.props.createProject()}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: "-10px", fontSize: "16pt" }}>Projects</div>
        <hr />
        {this.renderProjects()}
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
