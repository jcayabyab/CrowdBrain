import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import { getProject } from "../../actions/projectActions";
import {
  getFeature,
  editFeature,
  deleteFeature,
  wipeFeatures
} from "../../actions/featureActions";
import { getComments, wipeComments } from "../../actions/commentActions";
import LoadingWheel from "../utils/LoadingWheel";
import BackButton from "../utils/BackButton";
import Detail from "../utils/Detail";
import SubtaskList from "./SubtaskList";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Editable from "../utils/Editable";
import EditButton from "../utils/EditButton";
import DeleteButton from "../utils/DeleteButton";

const Header = styled.div`
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  render() {
    const { project, feature, comments, editFeature } = this.props;

    if (project && feature) {
      return (
        <div>
          {this.renderHeader()}
          <hr style={{ marginTop: "4px" }} />
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <Detail
                object={feature}
                onSubmit={values => editFeature(feature._id, values)}
              />
              <hr />
              <div>
                <CommentForm />
                <CommentList comments={comments} />
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <SubtaskList feature={feature} />
            </div>
          </div>
        </div>
      );
    }
    return <LoadingWheel />;
  }

  renderHeader() {
    const { project, feature } = this.props;
    const projectURL = `/p/${this.props.match.params.projectId}`;

    return (
      <Header>
        <BackButton to={projectURL} />
        <HeaderText>
          <ProjectText to={projectURL}>{project.title}</ProjectText>
          <i className="fas fa-caret-right" style={{ margin: "0px 15px" }} />
          <Editable
            style={{ fontWeight: "bold" }}
            object={feature}
            onSubmit={values => this.props.editFeature(feature._id, values)}
          >
            {feature.title}
            <EditButton />
          </Editable>
        </HeaderText>
        <DeleteButton onClick={this.handleDelete.bind(this)} />
      </Header>
    );
  }

  async handleDelete() {
    await this.props.deleteFeature(this.props.feature._id);
    this.props.history.push(`/p/${this.props.match.params.projectId}`);
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
    deleteFeature,
    getComments,
    wipeFeatures,
    wipeComments
  }
)(withRouter(Feature));
