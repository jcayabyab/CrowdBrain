import styled from "styled-components";

const BackButtonWrapper = styled.div`
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