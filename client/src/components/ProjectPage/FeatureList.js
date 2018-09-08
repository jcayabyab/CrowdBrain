import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import { createFeature } from "../../actions/featureActions";
import FeatureListItem from "./FeatureListItem";
import LoadingWheel from "../utils/LoadingWheel";
import AddButton from "../utils/AddButton";

class FeatureList extends Component {
  renderList() {
    if (this.props.features.notLoaded) {
      return <LoadingWheel />;
    }

    return (
      <div>
        {_.map(this.props.features, feature => (
          <FeatureListItem
            key={feature._id}
            feature={feature}
            projectId={this.props.projectId}
          />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          {_.isEmpty(this.props.features) && (
            <div>Create a new feature here: </div>
          )}
          <AddButton
            onClick={() => this.props.createFeature(this.props.projectId)}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default connect(
  null,
  { createFeature }
)(FeatureList);
