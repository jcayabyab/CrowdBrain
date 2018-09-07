import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

// expects onSubmit, onCancel, onDelete, and an object to display form for

const SingleForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      className="row"
      style={{ marginLeft: "0px" }}
    >
      <button
        className="btn btn-warning col-auto"
        style={{ padding: "0px 8px", margin: "0px 4px", color: "white" }}
        onClick={props.onCancel}
        type="button"
      >
        <i className="fas fa-ban" />
      </button>
      <Field
        name="title"
        component="input"
        type="text"
        className="form-control col"
        style={{ margin: "0px 6px" }}
      />
      <button
        className="btn btn-success col-auto"
        type="submit"
        style={{ padding: "0px 8px", margin: "0px 4px" }}
      >
        <i className="far fa-save" />
      </button>
      {props.onDelete && (
        <button
          className="btn btn-danger col-auto"
          style={{ padding: "0px 8px", margin: "0px 4px" }}
          onClick={props.onDelete}
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
