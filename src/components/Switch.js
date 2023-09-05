import "../styles/switch.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

//0096c7 header
//ade8f4 switcher

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);
  const backgroundStyle = isToggled
    ? { backgroundColor: "#2EC4B6" }
    : { backgroundColor: "#ADE8F4" };
  const toggler = isToggled ? { marginLeft: "30px" } : { marginLeft: "0px" };
  return (
    <div
      className="switch"
      onClick={() => {
        setIsToggled(!isToggled);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      style={backgroundStyle}
    >
      <span className="toggler" style={toggler} />
    </div>
  );
}

export default Switch;
