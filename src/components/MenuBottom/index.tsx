import { Container, DateDesc } from "./styles";

// Icons
import { FiMapPin } from "../../styles/Icons";

import { WeatherProps } from "../Menu";
import { formattedDate } from "../../utils/data";

const MenuBottom = ({ name }: WeatherProps) => {
  return (
    <Container>
      <DateDesc>Today</DateDesc>
      <DateDesc>{formattedDate}</DateDesc>
      <DateDesc>
        <FiMapPin />
        {name}
      </DateDesc>
    </Container>
  );
};

export default MenuBottom;
