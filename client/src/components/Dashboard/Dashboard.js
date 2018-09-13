import React, { Component } from "react";
import { connect } from "react-redux";

import { getProjects, wipeProjects } from "../../actions/projectActions";
import ProjectList from "./ProjectList";
import ActivityFeed from "./ActivityFeed";
import Guide from "./Guide";
import styled from "styled-components";

const ProjectHeader = styled.div`
  margin-bottom: -10px;
  font-size: 16pt;
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.wipeProjects();
    this.props.getProjects();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <ProjectHeader>Projects</ProjectHeader>
          <hr />
          <ProjectList />
        </div>
        <div className="col-md-7 col-sm-12">
          <Guide />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProjects, wipeProjects }
)(Dashboard);
