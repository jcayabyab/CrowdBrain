import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBarItem = props => {
  const classes =
    "nav-item" + (props.location.pathname === props.path ? " active" : ""); //active if path matches
  return (
    <li className={classes}>
      <Link
        className="nav-link"
        to={props.path}
        style={
          props.location.pathname === props.path
            ? { borderBottom: "2px solid #99CCFF" }
            : {}
        }
      >
        {props.name}
      </Link>
    </li>
  );
};

export default withRouter(NavBarItem); //need withRouter to access location
