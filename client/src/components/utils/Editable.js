import React, { Component } from "react";
import SingleForm from "./SingleForm";
import EditButton from "./EditButton";
import { connect } from "react-redux";

// expects onSubmit, section, type of input, onCancel, onDelete, and an object to display form for

class Editable extends Component {
  state = { editing: false, hovered: false };

  findEditButton(children) {
    const {user, owner} = this.props;
    const isOwner = (user._id && user._id === owner._id);

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === EditButton) {
        if (isOwner) {
          return React.cloneElement(child, {
            onClick: () => this.setState({ editing: true }),
            visible: this.state.hovered
          });
        }
        return null;
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
    const { onDelete, object, section, inputType, isDate } = this.props;

    return (
      <SingleForm
        onSubmit={values => this.onSubmit(values)}
        onCancel={this.onCancel.bind(this)}
        onDelete={onDelete}
        object={object}
        section={section}
        inputType={inputType}
        isDate={isDate}
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
    this.setState({ editing: false, hovered: false });
  }
}

function mapStateToProps({ user, owner }) {
  return { user, owner };
}

export default connect(mapStateToProps)(Editable);
