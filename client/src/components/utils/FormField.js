import React from "react";

const FormField = props => {
  const { touched, error } = props.meta;

  const className = `form-control ${touched && error ? `is-invalid` : ""}`;

  const placeholder = touched && error ? error : props.placeholder;
  const elementProps = {
    ...props.input,
    placeholder,
    className
  };

  if (props.inputType === "textarea") {
    elementProps.style = { height: "150px" };
  }

  delete elementProps.inputType;

  return (
    <div className="col" style={props.style}>
      {React.createElement(props.inputType, elementProps)}
    </div>
  );
};
export default FormField;
