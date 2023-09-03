import "../styles/card.css";
import Clear from "../images/Clear.png";
import Cloud from "../images/cloud.png";
import Drizzle from "../images/drizzle.png";
// Rain
// Snow
import Humidity from "./Humidity";

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

  return (
    <div className="card">
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
