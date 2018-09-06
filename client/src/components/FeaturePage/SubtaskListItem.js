import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSubtask } from "../../actions/subtasksActions";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

const SubtaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 55px;

  & * {
    margin-left: 6px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class SubtaskListItem extends Component {
  state = { hovered: false, editing: false };

  render() {
    return this.state.editing ? this.renderForm() : this.renderBody();
  }

  renderBody() {
    const { subtask } = this.props;

    return (
      <SubtaskWrapper
        className="list-group-item"
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
      >
        <div>{subtask.title}</div>
        <Right>
          <div>
            {
              <i
                style={{ fontSize: "18pt", cursor: "pointer" }}
                className={`far fa-edit`}
                onClick={this.handleEditClick.bind(this)}
              />
            }
          </div>
          <i
            style={{ fontSize: "18pt", cursor: "pointer" }}
            className={`far ${
              subtask.completed ? "fa-check-square" : "fa-square"
            }`}
            onClick={this.props.onToggle}
          />
        </Right>
      </SubtaskWrapper>
    );
  }

  renderForm() {
    return (
      <div className="list-group-item">
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          className="row"
        >
          <button
            className="btn btn-warning col-auto"
            style={{ padding: "0px 8px", margin: "0px 4px", color: "white" }}
            onClick={this.onCancel.bind(this)}
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
          <button
            className="btn btn-danger col-auto"
            style={{ padding: "0px 8px", margin: "0px 4px" }}
            onClick={this.props.onDelete}
            type="button"
          >
            <i className="fas fa-trash" />
          </button>
        </form>
      </div>
    );
  }

  handleMouseOver() {
    this.setState({ hovered: true });
  }

  handleMouseOut() {
    this.setState({ hovered: false });
  }

  handleEditClick() {
    this.setState({ editing: true });
  }

  onSubmit(values) {
    this.props.onEdit(values);
    this.setState({ editing: false });
  }

  onCancel() {
    this.setState({ editing: false });
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: { title: ownProps.subtask.title },
    form: ownProps.subtask._id
  };
}

export default connect(
  mapStateToProps,
  { toggleSubtask }
)(reduxForm()(SubtaskListItem));
