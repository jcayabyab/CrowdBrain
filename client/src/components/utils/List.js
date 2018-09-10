import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { createFeature } from "../../actions/featureActions";
import LoadingWheel from "../utils/LoadingWheel";
import AddFooter from "../utils/AddFooter";

const List = props => {
  const { objects, description, createFunction, mapFunction } = props;

  if (objects.notLoaded) {
    return (
      <div>
        <LoadingWheel />
      </div>
    );
  }

  return (
    <div>
      {_.map(objects, mapFunction)}
      {createFunction && (
        <AddFooter
          empty={_.isEmpty(objects)}
          description={description}
          onClick={createFunction}
        />
      )}
    </div>
  );
};

export default connect(
  null,
  { createFeature }
)(List);
