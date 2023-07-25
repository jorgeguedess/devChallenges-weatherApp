import { Container } from "./styles";

// Components
import MenuSearch from "../MenuSearch";
import MenuWeather from "../MenuWeather";
import MenuBottom from "../MenuBottom";
import { useContext } from "react";
import { GlobalContext } from "../../context/WeatherContext";

export interface WeatherProps {
  name?: string;
  icon?: string;
  temp?: number;
  details?: string;
}

interface MenuProps {
  weather: WeatherProps;
}

const Menu = () => {
  const {
    weather: { name, icon, temp, details },
  }: MenuProps = useContext(GlobalContext);

  return (
    <Container>
      <MenuSearch />
      <MenuWeather icon={icon} temp={temp} details={details} />
      <MenuBottom name={name} />
    </Container>
  );
};

export default Menu;
