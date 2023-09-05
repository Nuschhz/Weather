import "../styles/switch.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

//0096c7 header
//ade8f4 switcher

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className="switch"
      onClick={() => {
        setIsToggled(!isToggled);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      style={
        isToggled
          ? { backgroundColor: "rgb(98, 206, 179)" }
          : { backgroundColor: "#ADE8F4" }
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
