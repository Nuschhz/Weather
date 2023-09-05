import "../styles/weather.css";

import React, { useContext } from "react";

import Card from "./Card";

import { useGetWeather } from "../hooks/useGetWeather";
import { ThemeContext } from "../hooks/useThemeContext";

function Weather({ city = "", unit = "metric" }) {
  const [data] = useGetWeather(city, unit);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className="container"
        style={
          theme === "dark"
            ? { backgroundColor: "rgb(30, 30, 30)" }
            : { backgroundColor: "#ADE8F4" }
        }
      >
        {data === null ? (
          <h1>Busque por uma cidade</h1>
        ) : (
          <Card
            temperature={data.data.main.temp}
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
