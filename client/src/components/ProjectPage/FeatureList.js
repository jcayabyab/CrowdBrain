import _ from "lodash";
import React, { Component } from "react";
import FeatureListItem from "./FeatureListItem";
import LoadingWheel from "../../styled/LoadingWheel";

class FeatureList extends Component {
  renderList() {
    return _.map(this.props.features, feature => (
      <FeatureListItem key={feature._id} feature={feature} projectId={this.props.projectId}/>
    ));
  }

  render() {
    return <div>{(!_.isEmpty(this.props.features) && this.renderList()) || <LoadingWheel />}</div>;
  }
}

export default FeatureList;
