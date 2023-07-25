import styled from "styled-components";

export const Container = styled.div``;

export const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: clamp(4rem, 10%, 9rem);
`;

export const Button = styled.button`
  background: var(--bg-button-search);
  color: var(--text-1);
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 0;
  padding: 1rem 1.8rem;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Bar = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0;
  outline: none;
  background: var(--bg-button-menu);
  padding: 0.9rem;
  cursor: pointer;

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  transition: opacity 0.1s;

  &:hover {
    opacity: 0.9;
  }
`;

export const NavBottom = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "first second"
    "last last";
`;

export const NavMobile = styled.nav`
  z-index: 99;
  position: fixed;
  inset: 0;
  padding: 1.2rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 520px) {
    padding-inline: 4rem;
    width: 32%;
    flex: 32;
  }
  @media screen and (min-width: 520px) and (max-width: 840px) {
    flex: 42;
    width: 42%;
  }
  background: var(--bg-card);
`;

export const ButtonMobile = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: var(--text-4);
  align-self: flex-end;

  > svg {
    width: inherit;
    height: inherit;
    > path {
      stroke: var(--text-1);
    }
  }
`;

export const LocationContainer = styled.ul`
  margin-top: 4rem;
  text-align: left;
  list-style: none;
  overflow: auto;
`;
export const Location = styled.li`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.2rem;
  border: 0.1rem solid transparent;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    fill: none;
    transition: all 0.1s;
  }

  &:hover,
  &:focus {
    border-color: var(--text-4);
    svg {
      fill: var(--text-4);
    }
  }

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
