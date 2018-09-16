import React, { Component } from "react";
import styled from "styled-components";

const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;

const Button = styled.i`
  cursor: pointer;
  color: #7ad;
  font-size: 22pt;
  transition: color 0.15s linear;
  margin: 0px 5px;

  &:hover {
    color: #47a;
  }
`;

const Number = styled.div`
  margin: 0px 5px;
`;

class PageScroll extends Component {
  render() {
    return (
      <CenterAlign>
        <Button
          className="far fa-caret-square-left"
          onClick={this.props.onDecrease}
        />
        {this.renderNumbers()}
        <Button
          className="far fa-caret-square-right"
          onClick={this.props.onIncrease}
        />
      </CenterAlign>
    );
  }

  renderNumbers() {
    console.log(this.props.pages);
    const numbers = [];
    const bold = { fontWeight: "bold" };
    for (let i = 1; i <= this.props.pages; i++) {
      numbers.push(
        <Number key={i} style={i === this.props.page ? bold : null}>
          {i}
        </Number>
      );
    }

    return numbers;
  }
}

export default PageScroll;
