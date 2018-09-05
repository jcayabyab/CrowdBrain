import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingWheel from "../../styled/LoadingWheel";
import { getProject } from "../../actions/projectActions";
import { getFeature } from "../../actions/featureActions";
import { getComments } from "../../actions/commentActions";

class Feature extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.projectId);
    await this.props.getFeature(this.props.match.params.featureId);
    await this.props.getComments(this.props.feature._id);
  }

  render() {
    console.log(this.props);

    return <div>Feature</div>;
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
  { getProject, getFeature, getComments }
)(Feature);
