import React, { useContext, useEffect } from "react";
import {
  convertTextUnits,
  iconUrlFromCode,
} from "../../services/weatherService";

interface Props {
  title?: string;
  icon?: any;
  min?: number;
  max?: number;
  units: string;
}

import { Container, Title, Image, InfoDesc } from "./styles";
import { GlobalContext } from "../../context/WeatherContext";

const Card: React.FC<Props> = ({ title, icon, min, max }) => {
  const { units, temp, unitsWeather, setUnitsWeather } =
    useContext(GlobalContext);

  useEffect(() => {
    setUnitsWeather(() => convertTextUnits(units));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  return (
    <Container>
      <Title>{title}</Title>
      <Image src={iconUrlFromCode(icon)} alt={title} />
      <InfoDesc>
        <span>
          {max}
          {unitsWeather}
        </span>
        <span>
          {min}
          {unitsWeather}
        </span>
      </InfoDesc>
    </Container>
  );
};

export default Card;
