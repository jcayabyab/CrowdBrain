import _ from "lodash";
import React, { Component } from "react";

import LoadingWheel from "../utils/LoadingWheel";
import CommentListItem from "./CommentListItem";

class CommentList extends Component {
  renderList() {
    const { comments } = this.props;

    console.log(comments);

    if (comments === null) {
      return <LoadingWheel />;
    }

    return _.map(comments, comment => (
      <CommentListItem key={comment._id} comment={comment} />
    ));
  }

  render() {
    return (
      <div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

export default CommentList;
