import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import RightAlign from "../utils/RightAlign";

class CommentForm extends Component {
  async onSubmit(values) {
    const { onSubmit, reset } = this.props;
    onSubmit(values);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="username"
          component="input"
          type="text"
          className="form-control"
          placeholder="Username"
        />
        <Field
          name="body"
          component="textarea"
          type="text"
          className="form-control"
          placeholder="Body"
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

export default reduxForm({ form: "newComment" })(CommentForm);
