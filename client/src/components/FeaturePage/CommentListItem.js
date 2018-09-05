import React, { Component } from "react";
import styled from "styled-components";

const Comment = styled.div`
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Body = styled.div`
  font-size: 10pt;
`;

class CommentListItem extends Component {
  render() {
    const { comment } = this.props;
    console.log(comment);

    return (
      <Comment className="list-group-item">
        <Header>
          <Username>{comment.username}</Username>
          <small>3 days ago</small>
        </Header>
        <Body>{comment.body}</Body>
      </Comment>
    );
  }
}

export default CommentListItem;
