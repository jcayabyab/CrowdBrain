import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSubtask } from "../../actions/subtasksActions";
import styled from "styled-components";

import EditButton from "../utils/EditButton";
import SingleForm from "../utils/SingleForm";

const SubtaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 55px;
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
          <div>{<EditButton visible={this.state.hovered} onClick={this.handleEditClick.bind(this)} />}</div>
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
        <SingleForm
          onSubmit={values => this.onSubmit(values)}
          onCancel={this.onCancel.bind(this)}
          onDelete={this.props.onDelete}
          object={this.props.subtask}
        />
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

export default connect(
  null,
  { toggleSubtask }
)(SubtaskListItem);
