import React, { useContext, useState } from "react";

import { PropsWeatherObject } from "../../context/WeatherContext";
import useLocation from "../../hooks/useLocation";

import {
  Container,
  NavTop,
  Button,
  Bar,
  NavMobile,
  ButtonMobile,
  LocationContainer,
  Location,
} from "./styles";

// Components
import Input from "../Form/Input";

const listCity = ["Madrid", "Barcelona", "Portugal"];

// Icons
import { GrClose, AiOutlineRight, CrossHairIcon } from "../../styles/Icons";
import { GlobalContext } from "../../context/WeatherContext";

const MenuSearch: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const { getLocation } = useLocation();

  const handleCloseMenu = () => {
    setActive(false);
  };
  const handleOpenMenu = () => {
    setActive(true);
  };

  const handleClickLocation = ({ id }: any) => {
    setQuery({ q: id });
    handleCloseMenu();
  };

  const { setQuery }: PropsWeatherObject = useContext(GlobalContext);

  return (
    <Container>
      {active && (
        <NavMobile>
          <ButtonMobile onClick={handleCloseMenu}>
            <GrClose />
          </ButtonMobile>
          <Input handleCloseMenu={handleCloseMenu} />

          <LocationContainer>
            {listCity &&
              listCity.map((city, i) => (
                <Location
                  key={i}
                  id={city}
                  onClick={({ target }) => handleClickLocation(target)}
                >
                  {city} <AiOutlineRight />
                </Location>
              ))}
          </LocationContainer>
        </NavMobile>
      )}
      <NavTop>
        <Button onClick={handleOpenMenu}>Search for places</Button>
        <Bar onClick={getLocation}>
          <CrossHairIcon />
        </Bar>
      </NavTop>
    </Container>
  );
};

export default MenuSearch;
