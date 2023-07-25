import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.4rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 4.8rem;
  border: 0.1rem solid var(--text-1);
  padding-inline: 1.2rem;
  flex: 1;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--text-4);
    border: 0;
    margin-right: 1.3rem;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  color: var(--text-1);

  border: 0;
  outline: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-4);
`;

export const Button = styled.button`
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-1);
  background: var(--primary-1);
  border: 0;
  padding: 1.4rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover,
  &:focus {
    filter: brightness(1.5);
  }
`;