// List props: array of objects with title value

import React, { Component } from "react";
import onClickOutside from "react-onclickoutside"; // npm i react-onclickoutside
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: ${props => props.width};
`;

const HeaderWrapper = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: end;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
  background-color: ${props => props.color.primary || "#007bff"};
  border-color: ${props => props.color.primary};
  cursor: pointer;
  min-width: 30px;

  &:hover {
    color: #fff;
    background-color: ${props => props.color.hover || props.color.primary};
    text-decoration: none;
  }

  &:focus,
  .focus {
    background-color: ${props =>
      props.color.click
        ? props.color.click.body
        : props.color.hover || props.color.primary};
    outline: 0;
    ${props =>
      props.color.click && props.color.click.border
        ? `box-shadow: 0 0 0 0.2rem ${props.color.click.border}`
        : ""};
  }
`;

const List = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;
const ListItem = styled.div`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover,
  :focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  }

  &.active,
  :active {
    color: #fff;
    background-color: #007bff;
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      width: "160px",
      headerColor: {
        // optional, defaults to blue
        primary: "#007bff",
        hover: "#0069d9",
        click: {
          body: "#0069d9",
          border: "rgba(0, 123, 255, 0.25)"
        }
      }
    };

    this.toggleList = this.toggleList.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  onOptionSelect(title) {
    this.setState({ title, isOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { list } = this.props;
    const { isOpen, width, headerColor } = this.state;

    return (
      <DropdownWrapper>
        <Header width={width}>
          <HeaderWrapper
            onClick={() => this.toggleList()}
            color={headerColor || {}}
          >
            <i className={`fas fa-angle-${isOpen ? "up" : "down"}`} />
          </HeaderWrapper>
        </Header>

        {isOpen && (
          <List>
            {list &&
              list.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => this.onOptionSelect(item.title)}
                >
                  {item.title}
                </ListItem>
              ))}
          </List>
        )}
      </DropdownWrapper>
    );
  }
}

export default onClickOutside(Dropdown);
