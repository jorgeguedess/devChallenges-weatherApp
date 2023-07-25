import styled from "styled-components";

export const Container = styled.div``;

import { Img } from "react-image";

export const Image = styled(Img)`
  width: clamp(15rem, 15vw, 20.2rem);
  margin-inline: auto;
  height: auto;
`;

export const Title = styled.h1`
  font-size: clamp(7.2rem, 10vw, 14.4rem);
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-1);
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: clamp(3rem, 50vw, 4.8rem);
    font-weight: 300;
    color: var(--text-2);
  }
`;

export const TextStatus = styled.p`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--text-2);
`;
