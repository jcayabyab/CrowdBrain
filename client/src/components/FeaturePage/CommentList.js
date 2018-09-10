import React from "react";

import LoadingWheel from "../utils/LoadingWheel";
import List from "../utils/List";
import CommentListItem from "./CommentListItem";

const CommentList = props => {
  const { comments } = props;
  const mapFunction = comment => (
    <CommentListItem key={comment._id} comment={comment} />
  );

  if (comments === null) {
    return (
      <div>
        <LoadingWheel />
      </div>
    );
  }

  return <List objects={comments} mapFunction={mapFunction} />;
};

export default CommentList;
