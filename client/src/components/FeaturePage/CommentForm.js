import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import FormField from "../utils/FormField";
import RightAlign from "../utils/RightAlign";

class CommentForm extends Component {
  async onSubmit(values) {
    const { onSubmit, reset } = this.props;
    onSubmit(values);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    const fieldStyle = { margin: "5px 0px", padding: "0" };

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="username"
          component={FormField}
          inputType="input"
          type="text"
          className="form-control"
          placeholder="Username"
          style={fieldStyle}
        />
        <Field
          name="body"
          component={FormField}
          inputType="textarea"
          type="text"
          className="form-control"
          placeholder="Body"
          style={fieldStyle}
        />
        <RightAlign>
          <button type="submit" className="btn btn-success">
            {`Submit `}
            <i className="far fa-save" />
          </button>
        </RightAlign>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  const FIELDS = ["username", "body"];
  FIELDS.forEach(name => {
    if (!values[name]) {
      errors[name] = `You must enter a ${name}!`;
    }
  });

  return errors;
}

export default reduxForm({ validate, form: "newComment" })(CommentForm);
