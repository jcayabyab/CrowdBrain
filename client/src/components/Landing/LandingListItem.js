import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import formatTimeElapsed from "../../utils/formatTimeElapsed";

const ProjectLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: white;
  transition: background-color 0.15s linear;

  &:hover,
  &:link {
    text-decoration: none;
    color: inherit;
    background-color: #f0f0f0;
  }
`;

const Time = styled.div`
  font-size: 10pt;
`;

const Main = styled.div`
  border: 1px solid lightgray;
  margin-bottom: -1px;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Owner = styled.span`
  color: #9f9f9f;
`;

const LandingListItem = ({ project }) => {
  return (
    <ProjectLink to={`/p/${project._id}`}>
      <Main>
        <Header>
          <Left>
            <Title>{project.title}</Title>
            <div style={{ margin: "0px 10px" }}>|</div>
            <Owner>{`${project._user.firstName} ${
              project._user.lastName
            }`}</Owner>
          </Left>
          <Time>Created {formatTimeElapsed(project.dateCreated)}</Time>
        </Header>
        <div>{project.description}</div>
      </Main>
    </ProjectLink>
  );
};

export default LandingListItem;
