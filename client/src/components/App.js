import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={() => <div>App</div>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
