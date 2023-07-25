import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  @media screen and (min-width: 970px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
  gap: 3.6rem;
`;

export const Card = styled.div`
  text-align: center;
  background: var(--bg-card);
  padding: 1rem 2rem 2rem 2rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-1);
  margin-bottom: 0.6rem;
`;

export const CardInfo = styled.div`
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 1rem;

  > span {
    font-size: clamp(1.6rem, 3vw, 3rem);
    font-weight: 500;
    position: relative;
    bottom: 0.7rem;
    margin-left: 0.5rem;
  }
`;

interface PropsAction {
  percentage?: boolean;
}

export const CardAction = styled.div<PropsAction>`
  text-align: center;
  display: flex;
  flex-direction: ${(props) => (props.percentage ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

export const ButtonNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  background: var(--text-4);
  border-radius: 50%;
  margin-right: 0.5rem;

  > svg {
    transform: rotate(-150deg);
    fill: var(--text-1);
  }
`;

export const NumbersPercentage = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const Number = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-2);
`;

interface PropsPercentage {
  humidity?: number;
}

export const BarPercentage = styled.div<PropsPercentage>`
  display: block;
  width: 75%;
  height: 0.8rem;
  background: var(--text-2);
  position: relative;
  border-radius: 8rem;
  margin-bottom: 0.4rem;

  &::after {
    content: "";
    /* width: 75%; */
    width: ${({ humidity }) => (humidity ? humidity + "%" : "75%")};
    height: inherit;
    position: absolute;
    left: 0;
    background: #ffec65;
  }

  &&:before {
    content: "%";
    font-size: 1.2rem;
    font-weight: 700;
    position: absolute;
    top: 1.2rem;
    right: 0;
    color: var(--text-2);
  }
`;
