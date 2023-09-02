import { useState } from "react";
import "../styles/switch.css";

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className="switch"
      onClick={() => setIsToggled(!isToggled)}
      style={
        isToggled
          ? { backgroundColor: "rgb(98, 206, 179)" }
          : { backgroundColor: "#457b9d" }
      }
    >
      <span
        className="toggler"
        style={isToggled ? { marginLeft: "30px" } : { marginLeft: "0px" }}
      />
    </div>
  );
}

export default Switch;
