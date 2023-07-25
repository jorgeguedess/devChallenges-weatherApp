// Icons
import { TbNavigationFilled } from "../../styles/Icons";
import { PanelProps } from "../Panel";

import {
  Container,
  Card,
  CardTitle,
  CardInfo,
  CardAction,
  ButtonNavigation,
  NumbersPercentage,
  Number,
  BarPercentage,
} from "./styles";

const PanelHightLights = ({ weather }: PanelProps) => {
  return (
    <Container>
      <Card>
        <CardTitle>Wind status</CardTitle>
        <CardInfo>
          {weather.speed}
          <span>mph</span>
        </CardInfo>
        <CardAction>
          <ButtonNavigation>
            <TbNavigationFilled />
          </ButtonNavigation>
          <p>WSW</p>
        </CardAction>
      </Card>
      <Card>
        <CardTitle>Humidity</CardTitle>
        <CardInfo>
          {weather.humidity} <span>%</span>
        </CardInfo>
        <CardAction percentage>
          <NumbersPercentage>
            <Number>0</Number>
            <Number>50</Number>
            <Number>100</Number>
          </NumbersPercentage>
          <BarPercentage humidity={weather.humidity}></BarPercentage>
        </CardAction>
      </Card>
      <Card>
        <CardTitle>Visibility</CardTitle>
        <CardInfo>
          {weather.visibility}
          <span>Km</span>
        </CardInfo>
      </Card>
      <Card>
        <CardTitle>Air Pressure</CardTitle>
        <CardInfo>
          {weather.pressure} <span>hPa</span>
        </CardInfo>
      </Card>
    </Container>
  );
};

export default PanelHightLights;
