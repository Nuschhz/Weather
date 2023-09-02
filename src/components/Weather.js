import "../styles/weather.css";

import React from "react";

import Card from "./Card";

import { useGetWeather } from "../hooks/useGetWeather";

function Weather({ city = "", unit = "metric" }) {
  const [data] = useGetWeather(city, unit);
  console.log(data);
  return (
    <div>
      <div className="container">
        {data === undefined ? null : (
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
