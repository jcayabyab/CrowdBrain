import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getFeatures, wipeFeatures } from "../../actions/featureActions";
import { getProject, editProject } from "../../actions/projectActions";
import LoadingWheel from "../utils/LoadingWheel";
import FeatureList from "./FeatureList";
import ProjectDetail from "./ProjectDetail";
import BackButtonWrapper from "../utils/BackButtonWrapper";
import Editable from "../utils/Editable";
import EditButton from "../utils/EditButton";

const Header = styled.div`
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Project extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.projectId);
    await this.props.getFeatures(this.props.project._id);
  }

  componentWillUnmount() {
    this.props.wipeFeatures();
  }

  renderHeader() {
    const { project } = this.props;

    return (
      <div>
        <div style={{ position: "relative", margin: "5px 0 -10px" }}>
          <BackButtonWrapper>
            <Link to="/dashboard">
              <i className="far fa-caret-square-left" />
            </Link>
          </BackButtonWrapper>
          <Header>
            <Editable
              object={project}
              onSubmit={values => this.props.editProject(project._id, values)}
            >
              {project.title}
              <EditButton />
            </Editable>
          </Header>
        </div>
      </div>
    );
  }

  render() {
    const { project, features } = this.props;

    if (project) {
      return (
        <div>
          {this.renderHeader()}
          <hr />
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <FeatureList features={features} projectId={project._id} />
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
  return {
    projects: projects,
    project: projects[ownProps.match.params.projectId],
    features
  };
}

export default connect(
  mapStateToProps,
  { getFeatures, getProject, editProject, wipeFeatures }
)(Project);
