import React, { Component } from "react";
import SubtaskListItem from "./SubtaskListItem";
import { connect } from "react-redux";

import {
  createSubtask,
  editSubtask,
  deleteSubtask,
  toggleSubtask
} from "../../actions/subtasksActions";
import AddButton from "../utils/AddButton";

class SubtaskList extends Component {
  renderList() {
    const { subtasks } = this.props.feature;
    const { feature } = this.props;
    return subtasks.map(subtask => (
      <SubtaskListItem
        key={subtask._id}
        subtask={subtask}
        onToggle={async () =>
          await this.props.toggleSubtask(feature._id, subtask._id)
        }
        onEdit={values =>
          this.props.editSubtask(feature._id, subtask._id, values)
        }
        onDelete={() => this.props.deleteSubtask(feature._id, subtask._id)}
      />
    ));
  }

  handleAdd() {
    this.props.createSubtask(this.props.feature._id);
  }

  render() {
    return (
      <div>
        <div className="list-group">{this.renderList()}</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AddButton onClick={this.handleAdd.bind(this)} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createSubtask, editSubtask, deleteSubtask, toggleSubtask }
)(SubtaskList);
