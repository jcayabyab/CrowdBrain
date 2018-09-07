import React from "react";
import styled from "styled-components";

import EditButton from "../utils/EditButton";
import Editable from "../utils/Editable";

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
          <i
            style={{ fontSize: "18pt", cursor: "pointer" }}
            className={`far ${
              subtask.completed ? "fa-check-square" : "fa-square"
            }`}
            onClick={onToggle}
          />
        </Right>
      </SubtaskWrapper>
    </Editable>
  </div>
);

export default SubtaskListItem;
