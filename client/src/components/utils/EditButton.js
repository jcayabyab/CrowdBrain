import React from "react";

const EditButton = props => {
  const style = { fontSize: "18pt", cursor: "pointer", margin: "0px 4px" };
  if(props.visible === false) {
    style.color = "white";
  }

  return (
    <i
      style={style}
      className={`far fa-edit`}
      onClick={props.onClick}
    />
  );
};

export default EditButton;
