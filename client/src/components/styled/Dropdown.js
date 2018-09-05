// List props: array of objects with title value

import React, { Component } from "react";
import onClickOutside from "react-onclickoutside"; // npm i react-onclickoutside
import {
  DropdownWrapper,
  Header,
  Icon,
  List,
  ListItem
} from "./utils/dropdown-styled";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: this.props.title,
      width: "160px",
      headerColor: { // optional, defaults to blue
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
    const { isOpen, title, width, headerColor } = this.state;

    return (
      <DropdownWrapper>
        <Header onClick={() => this.toggleList()} width={width} color={headerColor || {}}>
          {title}
          <Icon className={`fas fa-angle-${isOpen ? "up" : "down"}`} />
        </Header>

        {isOpen && (
          <List>
            {list && list.map((item, index) => (
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
