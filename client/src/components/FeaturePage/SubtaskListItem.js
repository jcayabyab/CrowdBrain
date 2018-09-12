import React from "react";
import styled from "styled-components";

import EditButton from "../utils/EditButton";
import Editable from "../utils/Editable";
import Checkbox from "./Checkbox";

const SubtaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubtaskListItem = ({ subtask, onToggle, onEdit, onDelete }) => (
  <div className="list-group-item">
    <Editable
      onDelete={onDelete}
      onSubmit={values => onEdit(values)}
      object={subtask}
    >
      <SubtaskWrapper>
        <div>{subtask.title}</div>
        <Right>
          <EditButton />
          <Checkbox onClick={onToggle} completed={subtask.completed} />
        </Right>
      </SubtaskWrapper>
    </Editable>
  </div>
);

export default SubtaskListItem;
