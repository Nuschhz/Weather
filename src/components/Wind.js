import "../styles/wind.css";

import Wind from "../images/wind.png";

function WindSpeed({ windSpeed = 0 }) {
  return (
    <div className="windContainer">
      <img
        src={Wind}
        alt={"Wind Icon"}
        style={{ height: "32px", width: "32px" }}
      />
      <div className="windInfoContainer">
        {windSpeed}
        <span>Km/h</span>
      </div>
    </div>
  );
}

export default WindSpeed;
