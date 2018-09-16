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
          <hr style={{ marginTop: "0", marginBottom: "10px" }} />
          <LandingList />
        </div>
      </div>
    );
  }
}

export default Landing;
