import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 50px;
  position: relative;
`;

const CompletionLine = styled.div`
  background-color: ${props => props.completed ? `limegreen` : `#fc0`};
  display: block;
  height: 100%;
  width: 3px;
  position: absolute;
`;

const Title = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

class ProjectListItem extends Component {
  render() {
    const { _id, title } = this.props.project;

    return (
      <Button
        to={`/p/${_id}`}
        className="list-group-item list-group-item-action"
      >
        <Wrapper>
          <CompletionLine />
          <Title>
            <div>{title}</div>
          </Title>
        </Wrapper>
      </Button>
    );
  }
}

export default ProjectListItem;
