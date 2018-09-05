import _ from "lodash";
import React, { Component } from "react";

import CommentListItem from "./CommentListItem";

class CommentList extends Component {
  renderList() {
    const { comments } = this.props;

    return _.map(comments, comment => (
      <CommentListItem key={comment._id} comment={comment} />
    ));
  }

  render() {
    return (
      <div>
        <div>Comments: </div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

export default CommentList;
