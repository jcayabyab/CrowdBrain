import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

// expects onSubmit, onCancel, onDelete, and an object to display form for

const SingleForm = props => {
  const {
    handleSubmit,
    onSubmit,
    onCancel,
    section,
    inputType,
    onDelete
  } = props;

  const fieldStyle = { margin: "0px 6px" };

  if (inputType === "textarea") {
    fieldStyle.height = "150px";
  }

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
      <Field
        name={section || "title"}
        component={inputType || "input"}
        type="text"
        className="form-control col"
        style={fieldStyle}
      />
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

function mapStateToProps(state, ownProps) {
  return {
    initialValues: { ...ownProps.object },
    form: ownProps.object._id
  };
}

export default connect(mapStateToProps)(reduxForm()(SingleForm));
