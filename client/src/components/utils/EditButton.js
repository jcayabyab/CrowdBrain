import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  font-size: 18pt;
  cursor: pointer;
  margin: 0px 6px;
  color: ${props => (props.visible ? "black" : "#ccc")};
  transition: color 0.1s linear;
`;

const EditButton = props => {
  return (
    <Icon
      visible={props.visible}
      className={`far fa-edit`}
      onClick={props.onClick}
    />
  );
};

export default EditButton;
