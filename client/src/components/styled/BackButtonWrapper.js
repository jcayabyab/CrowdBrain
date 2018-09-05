import styled from "styled-components";

const BackButtonWrapper = styled.div`
  position: absolute;
  top: -8px;
  left: 0;
  color: #7ad;
  font-size: 22pt;
  transition: color 0.15s linear;

  &:hover {
    color: #47a;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`

export default BackButtonWrapper;