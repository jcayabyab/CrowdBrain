import React from "react";
import { connect } from "react-redux";

import AddButton from "./AddButton";

const AddFooter = props => {
  const { empty, description, onClick, user, owner } = props;
  const isOwner = user._id && user._id === owner._id;

  if (isOwner) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        {empty && <div>{description}</div>}
        <AddButton onClick={onClick} />
      </div>
    );
  }

  return null;
};

function mapStateToProps({ user, owner }) {
  return { user, owner };
}

export default connect(mapStateToProps)(AddFooter);
