import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { createFeature } from "../../actions/featureActions";
import FeatureListItem from "./FeatureListItem";
import LoadingWheel from "../utils/LoadingWheel";
import AddFooter from "../utils/AddFooter";

const FeatureList = props => {
  const { features, projectId, createFeature } = props;

  if (features.notLoaded) {
    return (
      <div>
        <LoadingWheel />
      </div>
    );
  }

  return (
    <div>
      {_.map(features, feature => (
        <FeatureListItem
          key={feature._id}
          feature={feature}
          projectId={projectId}
        />
      ))}
      <AddFooter
        empty={_.isEmpty(features)}
        description="Create a new feature here: "
        onClick={() => createFeature(projectId)}
      />
    </div>
  );
};

export default connect(
  null,
  { createFeature }
)(FeatureList);
