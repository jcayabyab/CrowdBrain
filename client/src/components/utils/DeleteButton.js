import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const DeleteButton = ({ user, onClick }) =>
  user ? (
    <Wrapper onClick={onClick}>
      <Button className="fas fa-trash" />
    </Wrapper>
  ) : (
    <div />
  );

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(DeleteButton);
