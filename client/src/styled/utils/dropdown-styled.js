import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const Header = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
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
  min-width: ${props => props.width};

  &:hover {
    color: #fff;
    background-color: ${props => props.color.hover || props.color.primary};
    text-decoration: none;
  }

  &:focus,
  .focus {
    background-color: ${props =>
      props.color.click ? props.color.click.body : props.color.hover || props.color.primary};
    outline: 0;
    ${props =>
      props.color.click && props.color.click.border
        ? `box-shadow: 0 0 0 0.2rem ${props.color.click.border}`
        : ""};
  }
`;

export const Icon = styled.i`
  margin-left: 7px;
`;

export const List = styled.div`
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

export const ListItem = styled.div`
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
