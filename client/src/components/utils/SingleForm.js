import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import DatePickerField from "./DatePickerField";
import FormField from "./FormField";

// expects onSubmit, onCancel, onDelete, and an object to display form for

const SingleForm = props => {
  const {
    handleSubmit,
    onSubmit,
    onCancel,
    section,
    inputType,
    onDelete,
    isDate
  } = props;

  const handleIfDate = () => {
    return isDate && section === "dateDue" ? (
      <div className="col" style={{ padding: "0px", maxWidth: "300px" }}>
        <DatePickerField />
      </div>
    ) : (
      <Field
        name={section || "title"}
        component={FormField}
        inputType={inputType || "input"}
        type="text"
        className="col"
        style={{ padding: "0px" }}
      />
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="row"
      style={{ marginLeft: "0px" }}
    >
      <button
        className="btn btn-warning col-auto"
        style={{ padding: "0px 8px", margin: "0px 4px", color: "white" }}
        onClick={onCancel}
        type="button"
      >
        <i className="fas fa-ban" />
      </button>
      {handleIfDate()}
      <button
        className="btn btn-success col-auto"
        type="submit"
        style={{ padding: "0px 8px", margin: "0px 4px" }}
      >
        <i className="far fa-save" />
      </button>
      {onDelete && (
        <button
          className="btn btn-danger col-auto"
          style={{ padding: "0px 8px", margin: "0px 4px" }}
          onClick={onDelete}
          type="button"
        >
          <i className="fas fa-trash" />
        </button>
      )}
    </form>
  );
};

function validate(values) {
  const errors = {};

  _.forEach(values, (value, key) => {
    if (value === "") {
      errors[key] = "Cannot be empty!";
    }
  });
  return errors;
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: { [ownProps.section]: ownProps.object[ownProps.section] },
    form: `${ownProps.object._id}-${ownProps.section}`
  };
}

export default connect(mapStateToProps)(reduxForm({ validate })(SingleForm));
