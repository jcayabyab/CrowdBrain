import React, { Component } from "react";
import SingleForm from "./SingleForm";
import EditButton from "./EditButton";

class Editable extends Component {
  state = { editing: false, hovered: false };

  render() {
    return this.state.editing ? this.renderForm() : this.renderBody();
  }

  renderBody() {
    const children = React.Children.map(this.props.children, child => {
      if(child.type === EditButton) {
        return React.cloneElement(child, {
          visible: this.state.hovered,
          onClick: () => this.setState({ editing: true })
        })
      }
      return child;
    })

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
    return (
      <SingleForm
        onSubmit={values => this.onSubmit(values)}
        onCancel={this.onCancel.bind(this)}
        onDelete={this.props.onDelete}
        object={this.props.object}
      />
    );
  }

  handleMouseOver() {
    this.setState({ hovered: true });
  }

  handleMouseOut() {
    this.setState({ hovered: false });
  }

  onSubmit(values) {
    this.props.onSubmit(values);
    this.setState({ editing: false });
  }

  onCancel() {
    this.setState({ editing: false });
  }
}

export default Editable;
