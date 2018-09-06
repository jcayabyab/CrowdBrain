import React, { Component } from "react";
import styled from "styled-components";

const Comment = styled.div`
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10pt;
  margin-bottom: 5px;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Body = styled.div`
  font-size: 10pt;
  margin-bottom: 3px;
`;

class CommentListItem extends Component {
  render() {
    const { comment } = this.props;

    return (
      <Comment className="list-group-item">
        <Header>
          <HeaderLeft>
            <Username>{comment.username}</Username>
            <div style={{ margin: "0px 5px" }}>|</div>
            <div>3 days ago</div>
          </HeaderLeft>
          <div>{comment.approved && `Approved`}</div>
        </Header>
        <Body>{comment.body}</Body>
      </Comment>
    );
  }
}

export default CommentListItem;
