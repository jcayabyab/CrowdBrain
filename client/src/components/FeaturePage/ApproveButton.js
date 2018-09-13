import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  font-size: 16pt;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  color: ${({ approved, clickable }) =>
    approved ? "#428bca" : clickable ? "#ccc" : "white"};
  transition: color 0.15s linear;

  &:hover {
    color: ${({ approved, clickable }) =>
      clickable ? "#aaa" : approved ? "#428bca" : "white"};
  }
`;

const ApproveButton = ({ approved, clickable, onClick }) => {
  return (
    <div>
      <Icon
        className="far fa-thumbs-up"
        approved={approved}
        clickable={clickable}
        onClick={clickable ? onClick : null}
      />
    </div>
  );
};

export default ApproveButton;
