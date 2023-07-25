import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";

// Components
import Panel from "./components/Panel";
import Menu from "./components/Menu";
import getFormattedWeatherData from "./services/weatherService";
import { GlobalContext } from "./context/WeatherContext";
import useLocation from "./hooks/useLocation";

const App: React.FC = () => {
  const { query, units, weather, setWeather } = useContext(GlobalContext);
  const { getLocation } = useLocation();

  const fetchWeather = useCallback(async () => {
    if (query.lat || query.lon || query.q) {
      await getFormattedWeatherData({ ...query, units }).then((data: any) => {
        setWeather(data);
      });
    }
  }, [query, units]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  if (weather)
    return (
      <Container>
        <Menu />
        <Panel />
      </Container>
    );
  else return null;
};

export default App;

export const Container = styled.div`
  @media screen and (min-width: 520px) {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
  }
`;
