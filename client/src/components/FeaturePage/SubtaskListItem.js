import React, { Component } from "react";

class SubtaskListItem extends Component {
  state = {};
  render() {
    const { subtask } = this.props;

    return <div className="list-group-item">{subtask.title}</div>;
  }
}

export default SubtaskListItem;
