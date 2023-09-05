import HumidityIcon from "../images/humidity.png";
import "../styles/humidity.css";

function Humidity({ humidity = 0 }) {
  return (
    <div className="humidityContainer">
      <div className="humidityInfoContainer">
        <img
          src={HumidityIcon}
          alt={"Umidade"}
          style={{ height: "32px", width: "32px" }}
        />
      </div>
      <div>
        <div className="humidityInfo">{humidity.toFixed(2)}%</div>
        <div className="humidityPercentage">
          <div
            style={{
              width: `${humidity * 0.8}px`,
              height: "6px",
              backgroundColor: "rgb(37,100,230)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Humidity;
