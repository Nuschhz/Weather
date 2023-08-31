import "../styles/card.css";

function Card({
  temperature = 0,
  maxTemp = 0,
  minTemp = 0,
  humidity = 0,
  windSpeed = 0,
  cityName = "Santos",
  country = "BR",
}) {
  return (
    <div className="card">
      <div style={{ fontSize: "2em", fontWeight: "bold" }}>
        {cityName} - {country}
      </div>
      <div>imagem clima</div>
      <div className="temperature">{temperature}°C</div>
      <div className="bottomContainer">
        <div className="humidity">{humidity}%</div>
        <div className="windspeed">{windSpeed}Km/h</div>
      </div>
    </div>
  );
}

export default Card;
