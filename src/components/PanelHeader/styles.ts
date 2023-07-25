import styled from "styled-components";

export const Container = styled.header`
  display: none;

  @media screen and (min-width: 520px) {
    display: flex;
    gap: 1.2rem;
    align-self: flex-end;
    margin-bottom: min(3rem, 50%);
  }
`;

export const ButtonTemperature = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--text-1);
  color: var(--bg-card);
  font-size: 1.8rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;

  &:last-child {
    color: var(--text-1);
    background: #585676;
  }
`;
