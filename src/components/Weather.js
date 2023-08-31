import "../styles/weather.css";

import React from "react";

import Card from "./Card";
import SmallCard from "./SmallCard";

import { useGetWeather } from "../hooks/useGetWeather";

function Weather() {
  const [data] = useGetWeather();
  console.log(data);
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
                Ontem
                <SmallCard />
              </div>
              <div>
                Amanhã
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
