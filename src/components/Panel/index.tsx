import { Container, Title, Cards } from "./styles";

// Components
import PanelHeader from "../PanelHeader";
import PanelHightLights from "../PanelHightLights";
import Card from "../Card";
import { GlobalContext } from "../../context/WeatherContext";
import { useContext } from "react";

export interface DailyProps {
  title: string;
  temp_min: number;
  temp_max: number;
  icon: string;
  length: number;
}

export interface PanelProps {
  weather: {
    humidity: number;
    pressure: number;
    visibility: number;
    speed: number;
    daily?: DailyProps;
  };
  units: string;
}

const Panel = () => {
  const { weather, units }: PanelProps = useContext(GlobalContext);

  return (
    <Container>
      <PanelHeader />
      <Cards>
        {weather.daily &&
          weather.daily.length > 0 &&
          weather.daily.map(
            ({ title, icon, temp_min, temp_max }: DailyProps) => (
              <Card
                key={title}
                title={title}
                icon={icon}
                min={temp_min}
                max={temp_max}
                units={units}
              />
            )
          )}
      </Cards>
      <Title>Today's Hightlights</Title>
      <PanelHightLights weather={weather} />
    </Container>
  );
};

export default Panel;
