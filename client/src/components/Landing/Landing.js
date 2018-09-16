import React, { Component } from "react";

import LandingList from "./LandingList";

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: "20px 0px", textAlign: "center" }}>
          Create projects and obtain feedback!
        </div>
        <div>
          <h3>Browse projects:</h3>
          <hr style={{ margin: "0" }} />
          <LandingList />
        </div>
      </div>
    );
  }
}

export default Landing;
