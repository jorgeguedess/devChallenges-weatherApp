import React, { ReactNode, createContext, useState } from "react";

export const GlobalContext = createContext<any | null>(null);

enum Units {
  Metric = "metric",
  Imperial = "imperial",
}

interface queryProps {
  lat?: number | null;
  lon?: number | null;
  search?: string | null;
}

interface PropsWeather {
  daily?: {
    title: string;
    temp_min: number;
    temp_max: number;
    icon: string;
  };
  details: string;
  humidity: number;
  icon: string;
  name: string;
  pressure: number;
  speed: number;
  temp: number;
  visibility: number;
}

export interface PropsWeatherObject {
  query: queryProps;
  setQuery: any;
  units: string;
  setUnits: any;
  weather: PropsWeather;
  setWeather: any;
  unitsWeather: string | null;
  setUnitsWeather: any;
}

interface MyComponentProps {
  children: ReactNode;
}

export const GlobalStorage: React.FC<MyComponentProps> = ({ children }) => {
  const [query, setQuery] = useState<queryProps>({ lat: null, lon: null });
  const [units, setUnits] = useState<`${Units}`>("metric");
  const [weather, setWeather] = useState<any | null>(null);

  const [unitsWeather, setUnitsWeather] = useState<string | null>(null);

  const weatherObject: PropsWeatherObject = {
    query,
    setQuery,
    units,
    setUnits,
    weather,
    setWeather,
    unitsWeather,
    setUnitsWeather,
  };

  return (
    <GlobalContext.Provider value={weatherObject}>
      {children}
    </GlobalContext.Provider>
  );
};
