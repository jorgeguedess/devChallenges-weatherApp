import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "first second"
    "last last";
`;

export const DateDesc = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: var(--text-3);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:nth-child(1) {
    grid-area: first;
  }
  &:nth-child(2) {
    grid-area: second;
  }
  &:nth-child(3) {
    margin-top: 0.5rem;
    grid-area: last;
  }
  &:first-child::after {
    content: "";
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: inherit;
    border-radius: 50%;
    font-weight: 500;
    margin-left: 1.5rem;
    margin-right: 0.5rem;
    background: var(--text-3);
  }

  > svg {
    margin-right: 0.4rem;
  }
`;
