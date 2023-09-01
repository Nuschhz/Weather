import "../styles/weather.css";

import React from "react";

import Card from "./Card";
import SmallCard from "./SmallCard";

import { useGetWeather } from "../hooks/useGetWeather";

function Weather({ city = "", unit = "" }) {
  const [data] = useGetWeather(city, unit);
  return (
    <div>
      <div className="container">
        {data === undefined ? null : (
          <>
            <Card
              temperature={data.data.main.temp}
              humidity={data.data.main.humidity}
              windSpeed={data.data.wind.speed}
              cityName={data.data.name}
              country={data.data.sys.country}
            />
            <div className="containerSmall">
              <div>
                Amanhã
                <SmallCard />
              </div>
              <div>
                Depois de Amanhã
                <SmallCard />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
