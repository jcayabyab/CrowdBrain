import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getFeatures } from "../../actions/featureActions";
import { getProject } from "../../actions/projectActions";
import LoadingWheel from "../../styled/LoadingWheel";
import FeatureList from "./FeatureList";
import ProjectDetail from "./ProjectDetail";
import BackButtonWrapper from "../../styled/BackButtonWrapper";

const Header = styled.div`
  font-size: 16pt;
  font-weight: bold;
  text-align: center;
`;

class Project extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.id);
    await this.props.getFeatures(this.props.project._id);
  }

  render() {
    const { project, features } = this.props;

    if (project) {
      return (
        <div>
          <div style={{ position: "relative", margin: "5px 0 -10px" }}>
            <BackButtonWrapper>
              <Link to="/dashboard">
                <i className="far fa-caret-square-left" />
              </Link>
            </BackButtonWrapper>
            <Header>{project.title}</Header>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <FeatureList features={features} project={project} />
            </div>
            <div className="col-md-7 col-sm-12">
              <ProjectDetail project={project} />
            </div>
          </div>
        </div>
      );
    }

    return <LoadingWheel />;
  }
}

function mapStateToProps({ projects, features }, ownProps) {
  return { project: projects[ownProps.match.params.id], features };
}

export default connect(
  mapStateToProps,
  { getFeatures, getProject }
)(Project);
