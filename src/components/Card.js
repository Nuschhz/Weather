import "../styles/card.css";
import Clear from "../images/Clear.png";
import Cloud from "../images/cloud.png";
import Drizzle from "../images/drizzle.png";
// Rain
// Snow

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
        <div className="humidity">
          <div className="infoContainer">
            <div className="info">Humidade</div>
            <div className="info">{humidity}%</div>
          </div>
          <div className="humidityPercentage">
            <div
              style={{
                width: `${humidity}px`,
                height: "4px",
                backgroundColor: "blue",
              }}
            ></div>
          </div>
        </div>
        <div className="info">{windSpeed}Km/h</div>
      </div>
    </div>
  );
}

export default Card;
