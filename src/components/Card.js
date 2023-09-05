import "../styles/card.css";
import Clear from "../images/Clear.png";
import Cloud from "../images/cloud.png";
import Drizzle from "../images/drizzle.png";
// Rain
// Snow
import Humidity from "./Humidity";

import { useContext } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

function Card({
  temperature = 0,
  maxTemp = 0,
  minTemp = 0,
  humidity = 0,
  windSpeed = 0,
  cityName = "Santos",
  country = "BR",
  image = "Clear",
}) {
  if (image === "Clear") {
    image = Clear;
  } else if (image === "Clouds") {
    image = Cloud;
  } else if (image === "Drizzle") {
    image = Drizzle;
  } else if (image === "Rain") {
    image = Drizzle;
  } else {
    image = "Not Found";
  }
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="card"
      style={
        theme === "dark"
          ? {
              backgroundColor: "rgba(55, 55, 55, 0.8)",
            }
          : {
              backgroundColor: "rgb(175,70,10)",
            }
      }
    >
      <div className="title">
        {cityName} - {country}
      </div>
      <div>
        <img src={image} alt="Clear Skyes" className="image" />
      </div>
      <div className="info">{temperature}°C</div>
      <div className="bottomContainer">
        <Humidity humidity={humidity} />
        <div className="info">{windSpeed}Km/h</div>
      </div>
    </div>
  );
}

export default Card;
