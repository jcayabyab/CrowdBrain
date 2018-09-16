import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllProjects, wipeProjects } from "../../actions/projectActions";

class LandingList extends Component {
  state = { page: 0 };

  componentDidMount() {
    this.props.getAllProjects(this.state.page);
  }

  componentWillUnmount() {
    this.props.wipeProjects();
  }

  render() {
    return <div>ProjectDetailedList</div>;
  }
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(
  mapStateToProps,
  { getAllProjects, wipeProjects }
)(LandingList);
