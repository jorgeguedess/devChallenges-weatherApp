import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: clamp(1rem, 50%, 2rem);

  @media screen and (min-width: 520px) {
    width: 68%;
    padding: 2rem 4rem 1rem 8%;
  }
  @media screen and (min-width: 520px) and (max-width: 840px) {
    width: 58%;
  }
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: clamp(2rem, 5vh, 4rem);

  overflow-x: scroll;

  @media screen and (min-width: 520px) {
    overflow-x: initial;
    flex-wrap: wrap;
  }
`;