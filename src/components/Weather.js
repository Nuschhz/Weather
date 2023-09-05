import "../styles/weather.css";

import React, { useContext } from "react";

import Card from "./Card";

import { useGetWeather } from "../hooks/useGetWeather";
import { ThemeContext } from "../hooks/useThemeContext";

function Weather({ city = "", unit = "metric" }) {
  const [data] = useGetWeather(city, unit);
  const { theme } = useContext(ThemeContext);

  const backgroundStyle =
    theme === "dark"
      ? { backgroundColor: "#1D1D1D" }
      : { backgroundColor: "#ADE8F4" };

  return (
    <div>
      <div className="container" style={backgroundStyle}>
        {data === null ? (
          <h1>Busque por uma cidade</h1>
        ) : (
          <Card
            mainTemp={data.data.main.temp}
            minTemp={data.data.main.temp_min}
            maxTemp={data.data.main.temp_max}
            humidity={data.data.main.humidity}
            windSpeed={data.data.wind.speed}
            cityName={data.data.name}
            country={data.data.sys.country}
            image={data.data.weather[0].main}
          />
        )}
      </div>
    </div>
  );
}

export default Weather;
