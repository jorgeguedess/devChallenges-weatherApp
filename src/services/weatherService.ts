/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime, Zone } from "luxon";

const apiKey = import.meta.env.API_KEY;
console.log(apiKey);

const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType: string, searchParams: any) => {
  const url: any = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data: {
  coord: { lat: any; lon: any };
  main: {
    temp: any;
    feels_like: any;
    temp_min: any;
    temp_max: any;
    humidity: any;
    pressure: any;
  };
  name: any;
  visibility: number;
  dt: any;
  sys: { country: any; sunrise: any; sunset: any };
  weather: any;
  wind: { speed: any };
}) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    visibility,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  // View here
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp: Math.round(temp),
    feels_like,
    temp_min: Math.round(temp_min),
    temp_max: Math.round(temp_max),
    humidity,
    pressure,
    name,
    visibility: visibility / 1000,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed: Math.round(speed),
  };
};

const formatToLocalTime = (
  zone: string | Zone | undefined,
  secs: number,
  format = "ccc, d LLL"
) => {
  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};
const formatForecastWeather = (data: { timezone: any; daily: any }) => {
  // eslint-disable-next-line prefer-const
  let { timezone, daily } = data;
  daily = daily
    .slice(1, 6)
    .map(
      (d: {
        dt: any;
        temp: { min: number; max: number };
        weather: { icon: any }[];
      }) => {
        return {
          title: formatToLocalTime(timezone, d.dt),
          temp_min: Math.round(d.temp.min),
          temp_max: Math.round(d.temp.max),
          icon: d.weather[0].icon,
        };
      }
    );

  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams: {
  lat?: any;
  lon?: any;
  units?: any;
}) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const iconUrlFromCode = (code: any) =>
  `http://openweathermap.org/img/wn/${code}@4x.png`;

const convertTextUnits = (type: string) => {
  if (type === "metric") return "°C";
  else if (type === "imperial") return "°F";
};

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode, convertTextUnits };
