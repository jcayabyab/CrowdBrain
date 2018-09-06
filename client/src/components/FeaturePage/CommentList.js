import _ from "lodash";
import React, { Component } from "react";

import LoadingWheel from "../utils/LoadingWheel";
import CommentListItem from "./CommentListItem";

class CommentList extends Component {
  renderList() {
    const { comments } = this.props;

    if (!_.isEmpty(comments)) {
      return _.map(comments, comment => (
        <CommentListItem key={comment._id} comment={comment} />
      ));
    }

    return <LoadingWheel />;
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
