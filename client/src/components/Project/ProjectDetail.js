import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeatures } from "../../actions/featureActions";
import { getProject } from "../../actions/projectActions";
import styled from "styled-components";
import LoadingWheel from "../../styled/LoadingWheel";

const Header = styled.div`
  font-size: 16pt;
  font-weight: bold;
`;

class ProjectDetail extends Component {
  async componentDidMount() {
    await this.props.getProject(this.props.match.params.id);
    await this.props.getFeatures(this.props.project._id);
  }

  render() {
    const { project, features } = this.props;

    if (project) {
      return (
        <div>
          <Header>{project.title}</Header>
        </div>
      );
    }

    return <LoadingWheel/>;
  }
}

function mapStateToProps({ projects, features }, ownProps) {
  return { project: projects[ownProps.match.params.id], features };
}

export default connect(
  mapStateToProps,
  { getFeatures, getProject }
)(ProjectDetail);
