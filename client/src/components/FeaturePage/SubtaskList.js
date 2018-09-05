import React, { Component } from "react";
import SubtaskListItem from "./SubtaskListItem";

class SubtaskList extends Component {
  renderList() {
    const { subtasks } = this.props.feature;

    return subtasks.map(subtask => (
      <SubtaskListItem key={subtask._id} subtask={subtask} />
    ));
  }

  render() {
    return <div className="list-group">{this.renderList()}</div>;
  }
}

export default SubtaskList;
