import styled, {keyframes} from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingWheel = styled.div`
  border: ${props => props.size * 16 / 120 || 16}px solid #f3f3f3;
  border-top: ${props => props.size * 16 / 120 || 16}px solid #69c;
  border-radius: 50%;
  width: ${props => props.size || 120}px;
  height: ${props => props.size || 120}px;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingWheel;
