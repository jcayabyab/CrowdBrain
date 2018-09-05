import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ProjectListItem extends Component {
  render() {
    const {_id, title} = this.props.project;

    return (
      <Link to={`/projects/${_id}`} className="list-group-item list-group-item-action">{title}</Link>
    );
  }
}

export default ProjectListItem;