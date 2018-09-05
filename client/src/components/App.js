import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Landing from "./Landing";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard/Dashboard";
import ProjectDetail from "./Project/ProjectDetail";

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
            <Route exact path="/projects/:id" component={ProjectDetail} />
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
