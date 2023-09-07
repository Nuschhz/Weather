import "../styles/card.css";
import Clear from "../images/clear.png";
import Cloud from "../images/cloud.png";
import Drizzle from "../images/drizzle.png";
// Rain
// Snow
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
}) {
  switch (image) {
    case "Clear":
      image = Clear;
      break;
    case "Clouds":
      image = Cloud;
      break;
    case "Drizzle":
      image = Drizzle;
      break;
    case "Rain":
      //image = Rain;
      break;
    case "Snow":
      //image = Snow;
      break;
    default:
      break;
  }
  console.log(image);
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
        <img src={image} alt="Clear Skyes" className="image" />
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
