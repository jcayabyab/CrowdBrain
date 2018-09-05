import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getProject } from "../../actions/projectActions";
import { getFeature } from "../../actions/featureActions";
import { getComments, wipeComments } from "../../actions/commentActions";
import LoadingWheel from "../utils/LoadingWheel";
import BackButtonWrapper from "../../styled/BackButtonWrapper";
import FeatureDetail from "./FeatureDetail";
import SubtaskList from "./SubtaskList";
import CommentList from "./CommentList";

const Header = styled.div`
  font-size: 16pt;
  text-align: center;
`;

const ProjectText = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.15s linear;

  &:hover {
    text-decoration: none;
    color: #57b;
  }
`;

class Feature extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.projectId);
    await this.props.getFeature(this.props.match.params.featureId);
    await this.props.getComments(this.props.feature._id);
  }

  componentWillUnmount() {
    this.props.wipeComments();
  }

  renderHeader() {
    const { project, feature } = this.props;

    return (
      <div>
        <div style={{ position: "relative", margin: "5px 0 -10px" }}>
          <BackButtonWrapper>
            <Link to={`/p/${this.props.match.params.projectId}`}>
              <i className="far fa-caret-square-left" />
            </Link>
          </BackButtonWrapper>
          <Header>
            <ProjectText to={`/p/${this.props.match.params.projectId}`}>
              {project.title}
            </ProjectText>
            <i className="fas fa-caret-right" style={{ margin: "0px 10px" }} />
            <span style={{ fontWeight: "bold" }}>{feature.title}</span>
          </Header>
        </div>
      </div>
    );
  }

  render() {
    const { project, feature, comments } = this.props;

    return project && feature ? (
      <div>
        {this.renderHeader()}
        <hr />
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <FeatureDetail feature={feature} />
            <hr />
            <div>
              <CommentList comments={comments} />
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <SubtaskList feature={feature} />
          </div>
        </div>
      </div>
    ) : (
      <LoadingWheel />
    );
  }
}

function mapStateToProps({ projects, features, comments }, ownProps) {
  return {
    project: projects[ownProps.match.params.projectId],
    feature: features[ownProps.match.params.featureId],
    comments
  };
}

export default connect(
  mapStateToProps,
  { getProject, getFeature, getComments, wipeComments }
)(Feature);
