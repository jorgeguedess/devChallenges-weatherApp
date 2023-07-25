import { useContext, useEffect } from "react";

import {
  convertTextUnits,
  iconUrlFromCode,
} from "../../services/weatherService";

import { Container, Image, Title, TextStatus } from "./styles";

import { GlobalContext } from "../../context/WeatherContext";
import { PropsWeatherObject } from "../../context/WeatherContext";

// Components
import CloudyContainer from "../CloudyContainer";

const MenuWeather = () => {
  const { unitsWeather, setUnitsWeather } = useContext(GlobalContext);

  const {
    weather: { icon, temp, details },
    units,
  }: PropsWeatherObject = useContext(GlobalContext);

  useEffect(() => {
    setUnitsWeather(() => convertTextUnits(units));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  return (
    <Container>
      <Image src={iconUrlFromCode(icon)} alt="IsoRainSwrsDay" />
      <CloudyContainer />
      <Title>
        {temp} <span>{unitsWeather}</span>
      </Title>
      <TextStatus>{details}</TextStatus>
    </Container>
  );
};

export default MenuWeather;
