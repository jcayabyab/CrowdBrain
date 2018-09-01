import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  border-bottom: 3px solid #99ccff;
`;

class NavBar extends Component {
  render() {
    // Bootstrap code
    return (
      <Nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          CrowdBrain
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavBarItem key="home" name="Home" path="/" />
            <NavBarItem key="test" name="Test" path="/test" />
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login
            </a>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default withRouter(NavBar);
