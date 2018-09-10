import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchOwner } from "../../actions";
import { getFeatures, wipeFeatures } from "../../actions/featureActions";
import { wipeComments } from "../../actions/commentActions";
import {
  getProject,
  editProject,
  deleteProject
} from "../../actions/projectActions";
import LoadingWheel from "../utils/LoadingWheel";
import FeatureList from "./FeatureList";
import Detail from "../utils/Detail";
import BackButton from "../utils/BackButton";
import Editable from "../utils/Editable";
import EditButton from "../utils/EditButton";
import DeleteButton from "../utils/DeleteButton";

const Header = styled.div`
  font-size: 16pt;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

class Project extends Component {
  async componentDidMount() {
    this.props.wipeFeatures();
    this.props.wipeComments();
    await this.props.getProject(this.props.match.params.projectId);
    this.props.getFeatures(this.props.match.params.projectId);
    this.props.fetchOwner(this.props.project._user);
  }

  render() {
    const { project, editProject } = this.props;

    if (project) {
      return (
        <div>
          {this.renderHeader()}
          <hr style={{ marginTop: "4px" }} />
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <Detail
                object={project}
                onSubmit={values => editProject(project._id, values)}
              />
            </div>
            <div className="col-md-5 col-sm-12">
              <div>Features:</div>
              <hr style={{ margin: "5px 0px 12px" }} />
              <FeatureList projectId={project._id} />
            </div>
          </div>
        </div>
      );
    }
    return <LoadingWheel />;
  }

  renderHeader() {
    const { project, owner } = this.props;

    return (
      <div>
        <Header>
          <BackButton to="/dashboard" />
          <Editable
            object={project}
            onSubmit={values => this.props.editProject(project._id, values)}
          >
            <div style={{ textAlign: "center" }}>
              {project.title}
              <EditButton />
            </div>
          </Editable>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div style={{ fontSize: "10pt", margin: "0px 3px" }}>
              {/*create toggle if owner or not*/}
              {owner.firstName &&
                `created by ${owner.firstName} ${owner.lastName}`}
            </div>
            <DeleteButton onClick={this.handleDelete.bind(this)} />
          </div>
        </Header>
      </div>
    );
  }

  async handleDelete() {
    await this.props.deleteProject(this.props.project._id);
    this.props.history.push(`/dashboard`);
  }
}

function mapStateToProps({ projects, owner }, ownProps) {
  return {
    project: projects[ownProps.match.params.projectId],
    owner
  };
}

export default connect(
  mapStateToProps,
  {
    fetchOwner,
    getFeatures,
    getProject,
    editProject,
    deleteProject,
    wipeFeatures,
    wipeComments
  }
)(Project);
