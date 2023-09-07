import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Moon from "../images/moon.png";
import Sun from "../images/clear.png";

import Button from "./Button";
import Input from "./Input";
import Switch from "./Switch";

import { IconSearch } from "@tabler/icons-react";

import { useContext, useState } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

function Header({ updateText = () => {} }) {
  const [textValue, setTextValue] = useState();
  const { theme } = useContext(ThemeContext);

  const Icon = () => {
    return (
      <IconSearch color={theme === "dark" ? "white" : "gray"} stroke={2} />
    );
  };
  const headerTheme =
    theme === "dark"
      ? { backgroundColor: "#1d3557" }
      : { backgroundColor: "#7E4386" };

  const inputContainerTheme =
    theme === "dark"
      ? {
          backgroundColor: "#457b9d",
        }
      : {
          backgroundColor: "white",
        };
  const buttonTheme =
    theme === "dark"
      ? {
          backgroundColor: "#457b9d",
          color: "white",
          placeholder: "white",
        }
      : {
          backgroundColor: "white",
          color: "black",
          placeholder: "black",
        };
  const iconSelector = theme === "dark" ? Moon : Sun;
  const altSelector = theme === "dark" ? "Moon" : "Sun";

  return (
    <header className="header" style={headerTheme}>
      <div className="content">
        <div className="inputContainer" style={inputContainerTheme}>
          <Input
            placeholder="Busque uma cidade..."
            className={`input-${theme}`}
            updateText={updateText}
            textValue={textValue}
            setTextValue={setTextValue}
          />
          <Button
            className="button"
            children={<Icon />}
            onClick={() => updateText(textValue)}
            style={buttonTheme}
          />
        </div>
        <div className="switchContainer">
          <Switch />
          <img src={iconSelector} alt={altSelector} className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
