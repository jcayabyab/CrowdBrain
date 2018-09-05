import React, { Component } from "react";

import ProjectList from "./ProjectList";
import ActivityFeed from "./ActivityFeed";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <ProjectList />
        </div>
        <div className="col-md-7 col-sm-12">
          <ActivityFeed />
        </div>
      </div>
    );
  }
}

export default Dashboard;
