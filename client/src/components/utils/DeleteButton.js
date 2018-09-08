import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Button = styled.i`
  font-size: 20pt;
  color: #999;
  transition: color 0.15s linear;
  margin: 4px;
  cursor: pointer;

  &:hover {
    color: #d9534f;
  }
`;

const DeleteButton = props => (
  <Wrapper onClick={props.onClick}>
    <Button className="fas fa-trash" />
  </Wrapper>
);

export default DeleteButton;
