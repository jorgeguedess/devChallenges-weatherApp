import styled from "styled-components";

interface Props {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export default styled.div<Props>`
  width: clamp(15rem, 15vw, 20rem);
  height: clamp(5rem, 15vh, 15rem);

  @media screen and (min-width: 520px) {
    width: clamp(20rem, 15vw, 24.8rem);
    height: clamp(15rem, 15vh, 15.8rem);
  }

  background: url("/Cloudy.png") no-repeat center / cover;
  opacity: 0.04;
  position: absolute;
  transform: translateY(-50%);

  top: ${(props) => (props.top ? props.top : "initial")};
  bottom: ${(props) => (props.bottom ? props.bottom : "initial")};
  left: ${(props) => (props.left ? props.left : "initial")};
  right: ${(props) => (props.right ? props.right : "initial")};
`;
