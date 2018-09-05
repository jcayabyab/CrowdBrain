import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getProjects } from "../../actions/projectActions";
import ProjectListItem from "./ProjectListItem";
import LoadingWheel from "../../styled/LoadingWheel";

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
    return _.map(this.props.projects, project => (
      <ProjectListItem key={project._id} project={project} />
    ));
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: "-10px", fontSize: "16pt"}}>Projects</div>
        <hr />
        <div>{this.renderProjects()}</div>
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(
  mapStateToProps,
  { getProjects }
)(ProjectList);
