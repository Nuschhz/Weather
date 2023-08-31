import "../styles/smallCards.css";

function SmallCard({ temperature = 0, windSpeed = 0, humidity = 0 }) {
  return (
    <div className="containerS">
      <span>imagem clima</span>
      <span>{temperature} C</span>
      <span>{windSpeed} Km/h</span>
      <span>{humidity}%</span>
    </div>
  );
}

export default SmallCard;
