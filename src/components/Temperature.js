import "../styles/temperature.css";

function Temperature({ mainTemp = 0, minTemp = 0, maxTemp = 0 }) {
  return (
    <div className="temperatureContainer">
      <div className="mainTemp">{mainTemp}°C</div>
      <div className="secTemp">
        <div className="maxTemp">{maxTemp}°C</div>
        <div className="minTemp">{minTemp}°C</div>
      </div>
    </div>
  );
}

export default Temperature;
