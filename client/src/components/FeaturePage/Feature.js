import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getProject } from "../../actions/projectActions";
import {
  getFeature,
  editFeature,
  wipeFeatures
} from "../../actions/featureActions";
import { getComments, wipeComments } from "../../actions/commentActions";
import LoadingWheel from "../utils/LoadingWheel";
import BackButtonWrapper from "../utils/BackButtonWrapper";
import Detail from "../utils/Detail";
import SubtaskList from "./SubtaskList";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Editable from "../utils/Editable";
import EditButton from "../utils/EditButton";

const Header = styled.div`
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: center;
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
    this.props.wipeFeatures();
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
            <i className="fas fa-caret-right" style={{ margin: "0px 15px" }} />
            <Editable
              style={{ fontWeight: "bold" }}
              object={feature}
              onSubmit={values => this.props.editFeature(feature._id, values)}
            >
              {feature.title}
              <EditButton />
            </Editable>
          </Header>
        </div>
      </div>
    );
  }

  render() {
    const { project, feature, comments, editFeature } = this.props;

    return project && feature ? (
      <div>
        {this.renderHeader()}
        <hr />
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <Detail
              object={feature}
              onSubmit={values => editFeature(feature._id, values)}
            />
            <hr />
            <div>
              <CommentList comments={comments} />
              <CommentForm />
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
  {
    getProject,
    getFeature,
    editFeature,
    getComments,
    wipeFeatures,
    wipeComments
  }
)(Feature);
