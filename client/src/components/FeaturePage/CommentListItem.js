import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { approveComment } from "../../actions/commentActions";
import formatTimeElapsed from "../../utils/formatTimeElapsed";
import ApproveButton from "./ApproveButton";

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    const { comment, user, owner, approveComment } = this.props;

    return (
      <Comment className="list-group-item">
        <div>
          <Header>
            <HeaderLeft>
              <Username>{comment.username}</Username>
              <div style={{ margin: "0px 5px" }}>|</div>
              <div>{formatTimeElapsed(comment.dateCreated)}</div>
            </HeaderLeft>
          </Header>
          <Body>{comment.body}</Body>
        </div>
        <ApproveButton
          approved={comment.approved}
          clickable={user._id && user._id === owner._id}
          onClick={() => approveComment(comment._id)}
        />
      </Comment>
    );
  }
}

const mapStateToProps = ({ user, owner }) => ({ user, owner });

export default connect(
  mapStateToProps,
  { approveComment }
)(CommentListItem);
