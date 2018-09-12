import React from "react";
import { connect } from "react-redux";

const Checkbox = ({user, owner, completed, onClick}) => {
  const style = {fontSize: "18pt"};
  const isOwner = user._id && user._id === owner._id;
  if (isOwner) {
    style.cursor = "pointer";
  }

  return (
    <i
      style={style}
      className={`far ${completed ? "fa-check-square" : "fa-square"}`}
      onClick={isOwner ? onClick : null}
    />
  );
};

function mapStateToProps({ user, owner }) {
  return { user, owner };
}

export default connect(mapStateToProps)(Checkbox);
