import React from "react";
import { Link } from "react-router-dom";

const FeatureListItem = ({ feature, projectId }) => {
  const { _id, title } = feature;

  return (
    <Link
      to={`/p/${projectId}/${_id}`}
      className="list-group-item list-group-item-action"
    >
      {title}
    </Link>
  );
};

export default FeatureListItem;
