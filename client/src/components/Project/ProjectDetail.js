import React, { Component } from 'react';
import {connect} from "react-redux";

class ProjectDetail extends Component {
  render() {
    console.log(this.props);

    return (
      <div>ProjectDetail</div>
    );
  }
}

function mapStateToProps({projects}, ownProps) {
  return {project: projects[ownProps.match.params.id]};
}

export default connect(mapStateToProps)(ProjectDetail);