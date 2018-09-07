import React, { Component } from "react";
import SingleForm from "./SingleForm";
import EditButton from "./EditButton";

// expects onSubmit, section, type of input, onCancel, onDelete, and an object to display form for

class Editable extends Component {
  state = { editing: false, hovered: false };

  findEditButton(children) {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === EditButton) {
        return React.cloneElement(child, {
          onClick: () => this.setState({ editing: true }),
          visible: this.state.hovered
        });
      }

      if (child.props.children) {
        child = React.cloneElement(child, {
          children: this.findEditButton(child.props.children)
        });
      }

      return child;
    });
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderBody();
  }

  renderBody() {
    const children = this.findEditButton(this.props.children);

    return (
      <span
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
      >
        {children}
      </span>
    );
  }

  renderForm() {
    const { onDelete, object, section, inputType } = this.props;

    return (
      <SingleForm
        onSubmit={values => this.onSubmit(values)}
        onCancel={this.onCancel.bind(this)}
        onDelete={onDelete}
        object={object}
        section={section}
        inputType={inputType}
      />
    );
  }

  handleMouseOver() {
    this.setState({ hovered: true });
  }

  handleMouseOut() {
    this.setState({ hovered: false });
  }

  async onSubmit(values) {
    await this.props.onSubmit(values);
    this.setState({ editing: false });
  }

  onCancel() {
    this.setState({ editing: false });
  }
}

export default Editable;
