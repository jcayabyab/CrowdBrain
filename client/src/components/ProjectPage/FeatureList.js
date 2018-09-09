import React from "react";
import { connect } from "react-redux";

import { createFeature } from "../../actions/featureActions";
import FeatureListItem from "./FeatureListItem";
import List from "../utils/List";

const FeatureList = props => {
  const { features, projectId, createFeature } = props;
  const mapFunction = feature => (
    <FeatureListItem
      key={feature._id}
      feature={feature}
      projectId={projectId}
    />
  );

  return (
    <List
      objects={features}
      createFunction={() => createFeature(projectId)}
      mapFunction={mapFunction}
    />
  );
};

function mapStateToProps({ features }) {
  return { features };
}

export default connect(
  mapStateToProps,
  { createFeature }
)(FeatureList);
