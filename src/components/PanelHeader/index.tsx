// Components
import { useContext } from "react";

import {
  GlobalContext,
  PropsWeatherObject,
} from "../../context/WeatherContext";

import { Container, ButtonTemperature } from "./styles";

const PanelHeader = () => {
  const { setUnits }: PropsWeatherObject = useContext(GlobalContext);

  return (
    <Container>
      <ButtonTemperature onClick={() => setUnits("metric")}>
        ºC
      </ButtonTemperature>
      <ButtonTemperature onClick={() => setUnits("imperial")}>
        ºF
      </ButtonTemperature>
    </Container>
  );
};

export default PanelHeader;
