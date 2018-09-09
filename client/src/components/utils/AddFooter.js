import React from "react";
import { connect } from "react-redux";

import AddButton from "./AddButton";

const AddFooter = props => {
  const { empty, description, onClick } = props;

  if (props.user) {
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
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(AddFooter);
