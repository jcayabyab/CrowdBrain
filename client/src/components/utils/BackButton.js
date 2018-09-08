import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  color: #7ad;
  font-size: 22pt;
  transition: color 0.15s linear;

  &:hover {
    color: #47a;
  }
`;

const BackButton = props => (
  <Wrapper to={props.to}>
    <i className="far fa-caret-square-left" />
  </Wrapper>
);

export default BackButton;
