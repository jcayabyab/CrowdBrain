import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Landing from "./Landing";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard/Dashboard";
import Project from "./ProjectPage/Project";
// import Feature from "./FeaturePage/Feature";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <NavBar />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/p/:id" component={Project} />
            {/* <Route exact path="/p/:id/:featureId" component={Feature} /> */}
            <Route
              exact
              path="/"
              render={() => {
                return this.props.user ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Landing />
                );
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
