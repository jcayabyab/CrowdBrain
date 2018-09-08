import React, { Component } from "react";
import { connect } from "react-redux";

import { getProjects } from "../../actions/projectActions";
import ProjectList from "./ProjectList";
import ActivityFeed from "./ActivityFeed";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div style={{ marginBottom: "-10px", fontSize: "16pt" }}>
            Projects
          </div>
          <hr />
          <ProjectList />
        </div>
        <div className="col-md-7 col-sm-12">
          <ActivityFeed />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProjects }
)(Dashboard);
