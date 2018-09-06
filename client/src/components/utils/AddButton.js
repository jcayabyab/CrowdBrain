import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  text-decoration: none;
  color: inherit;
`

const Button = styled.i`
  font-size: 20pt;
  color: #7ad;
  transition: color 0.15s linear;
  margin: 4px;
  cursor: pointer;

  &:hover {
    color: #47a;
  }
`;

const AddButton = props => (
  <Wrapper onClick={props.onClick}>
    <Button className="far fa-plus-square" />
  </Wrapper>
);

export default AddButton;
