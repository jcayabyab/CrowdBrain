import React, { Component } from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from "moment";
import { Field } from "redux-form";

import "react-widgets/dist/css/react-widgets.css";

moment.locale("en");
momentLocalizer();

class DatePickerField extends Component {
  renderPicker({ input: { onChange, value }, showTime }) {
    return (
      <DateTimePicker
        onChange={onChange}
        format="MMMM DD, YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />
    );
  }

  render() {
    return (
      <Field
        className="col"
        name="dateDue"
        showTime={false}
        component={this.renderPicker}
        style={this.props.style}
      />
    );
  }
}

export default DatePickerField;
