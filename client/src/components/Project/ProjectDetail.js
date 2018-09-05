import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeatures } from "../../actions/featureActions";
import { getProject } from "../../actions/projectActions";

class ProjectDetail extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.id);
    await this.props.getFeatures(this.props.project._id);
  }

  render() {
    return <div>ProjectDetail</div>;
  }
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { getFeatures, getProject }
)(ProjectDetail);
