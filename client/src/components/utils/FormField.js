import React from "react";

const FormField = props => (
  <div>
    <input
      className="form-control"
      type="text"
      placeholder={props.placeholder}
      {...props}
    />
  </div>
);

export default FormField;
