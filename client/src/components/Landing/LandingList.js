import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllProjects, wipeProjects } from "../../actions/projectActions";
import LoadingWheel from "../utils/LoadingWheel";
import LandingListItem from "./LandingListItem";
import PageScroll from "./PageScroll";

class LandingList extends Component {
  state = { projectsPerPage: 10, page: 1 };

  componentDidMount() {
    this.props.wipeProjects();
    this.props.getAllProjects(this.state.page, this.state.projectsPerPage);
  }

  componentWillUnmount() {
    this.props.wipeProjects();
  }

  renderList() {
    const { projects } = this.props;

    if (projects === null) {
      return (
        <div>
          <LoadingWheel />
        </div>
      );
    }

    return (
      <div>
        {_.map(projects, project => (
          <LandingListItem key={project._id} project={project} />
        ))}
      </div>
    );
  }

  handleDecrease() {
    if (this.state.page > 1) {
      this.props.wipeProjects();
      this.props.getAllProjects(
        this.state.page - 1,
        this.state.projectsPerPage
      );
      this.setState((prevState, props) => ({ page: prevState.page - 1 }));
    }
  }

  handleIncrease() {
    if (
      this.state.page < Math.ceil(this.props.count / this.state.projectsPerPage)
    ) {
      this.props.wipeProjects();
      this.props.getAllProjects(
        this.state.page + 1,
        this.state.projectsPerPage
      );
      this.setState((prevState, props) => ({ page: prevState.page + 1 }));
    }
  }

  render() {
    return (
      <div>
        <PageScroll
          page={this.state.page}
          pages={Math.ceil(this.props.count / this.state.projectsPerPage)}
          onDecrease={this.handleDecrease.bind(this)}
          onIncrease={this.handleIncrease.bind(this)}
        />
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ projects, count }) {
  return { projects, count };
}

export default connect(
  mapStateToProps,
  { getAllProjects, wipeProjects }
)(LandingList);
