import { useContext } from "react";
import { GlobalContext } from "../context/WeatherContext";

const useLocation = () => {
  const { query, setQuery } = useContext(GlobalContext);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        if (query.lat === lat && query.lon === lon) return;
        setQuery({
          lat,
          lon,
        });
        return setQuery;
      });
    }
  };

  return { getLocation };
};

export default useLocation;
