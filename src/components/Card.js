import "../styles/card.css";
import Clear from "../images/clear.png";
import Cloud from "../images/cloud.png";
import Drizzle from "../images/drizzle.png";
import Rain from "../images/rain.png";
import Snow from "../images/snow.png";

import Humidity from "./Humidity";
import Temperature from "./Temperature";
import WindSpeed from "./Wind";

import { useContext } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

function Card({
  mainTemp = 0,
  maxTemp = 0,
  minTemp = 0,
  humidity = 0,
  windSpeed = 0,
  cityName = "Santos",
  country = "BR",
  image = "Clear",
  imageAlt = "",
}) {
  switch (image) {
    case "Clear":
      image = Clear;
      imageAlt = "Céus Limpos";
      break;
    case "Clouds":
      image = Cloud;
      imageAlt = "Nublado";
      break;
    case "Drizzle":
      image = Drizzle;
      imageAlt = "Chuvisco";
      break;
    case "Rain":
      image = Rain;
      imageAlt = "Chuva";
      break;
    case "Snow":
      image = Snow;
      imageAlt = "Neve";
      break;
    default:
      break;
  }
  const { theme } = useContext(ThemeContext);
  const cardTheme =
    theme === "dark"
      ? {
          backgroundColor: "rgba(55, 55, 55, 0.8)",
        }
      : {
          backgroundColor: "#89608E",
        };
  return (
    <div className="card" style={cardTheme}>
      <div className="title">
        {cityName} - {country}
      </div>
      <div>
        <img src={image} alt={imageAlt} className="image" />
      </div>
      <Temperature mainTemp={mainTemp} minTemp={minTemp} maxTemp={maxTemp} />
      <div className="bottomContainer">
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} />
      </div>
    </div>
  );
}

export default Card;
