import React from "react";
import { Link } from "react-router-dom";

const FeatureListItem = ({ feature, project }) => {
  const { _id, title } = feature;

  return (
    <Link
      to={`/p/${project._id}/${_id}`}
      className="list-group-item list-group-item-action"
    >
      {title}
    </Link>
  );
};

export default FeatureListItem;
