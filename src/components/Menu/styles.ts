import styled from "styled-components";

interface PropsContainer {
  active?: boolean;
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  background: var(--bg-card);
  padding-block: clamp(0.5rem, 1vh, 4rem);
  padding-inline: clamp(1rem, 3vw, 4.6rem);
  padding: ${(props) => props.active && "initial"};
  text-align: center;
  @media screen and (min-width: 520px) {
    height: auto;
    width: 32%;
  }

  @media screen and (min-width: 520px) and (max-width: 840px) {
    width: 42%;
  }
  overflow: hidden;
  position: relative;
`;
