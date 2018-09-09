import React from "react";
import SubtaskListItem from "./SubtaskListItem";
import { connect } from "react-redux";

import {
  createSubtask,
  editSubtask,
  deleteSubtask,
  toggleSubtask
} from "../../actions/subtasksActions";
import List from "../utils/List";

const SubtaskList = props => {
  const { subtasks } = props.feature;
  const {
    feature,
    toggleSubtask,
    editSubtask,
    deleteSubtask,
    createSubtask
  } = props;

  const mapFunction = subtask => (
    <SubtaskListItem
      key={subtask._id}
      subtask={subtask}
      onToggle={() => toggleSubtask(feature._id, subtask._id)}
      onEdit={values => editSubtask(feature._id, subtask._id, values)}
      onDelete={() => deleteSubtask(feature._id, subtask._id)}
    />
  );

  return (
    <List
      objects={subtasks}
      description="Create a new subtask here: "
      createFunction={() => createSubtask(feature._id)}
      mapFunction={mapFunction}
    />
  );
};

export default connect(
  null,
  { createSubtask, editSubtask, deleteSubtask, toggleSubtask }
)(SubtaskList);
