import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: var(--bg-card);
  padding-block: 1rem;
  padding-inline: clamp(1rem, 1vw, 2rem);
  width: 13rem;
  height: min(17rem, auto);
`;

export const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.4rem, 1vw, 1.6rem);
  font-weight: 500;
  color: var(--text-1);
  margin-bottom: 1rem;
`;

import { Img } from "react-image";

export const Image = styled(Img)`
  display: block;
  height: 6rem;
  margin-inline: auto;
  margin-bottom: 3rem;
`;

export const InfoDesc = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  bottom: 1rem;

  > span {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text-1);

    &:last-child {
      color: var(--text-2);
    }
  }
`;
