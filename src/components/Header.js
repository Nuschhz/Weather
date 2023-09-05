import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Moon from "../images/moon.png";
import Sun from "../images/Clear.png";

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

  return (
    <header
      className="header"
      style={
        theme === "dark"
          ? { backgroundColor: "#1d3557" }
          : { backgroundColor: "#0096c7" }
      }
    >
      <div className="content">
        <div
          className="inputContainer"
          style={
            theme === "dark"
              ? {
                  backgroundColor: "#457b9d",
                }
              : {
                  backgroundColor: "white",
                }
          }
        >
          <Input
            placeholder="Busque uma cidade..."
            className="input"
            style={
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
                  }
            }
            updateText={updateText}
            textValue={textValue}
            setTextValue={setTextValue}
          />
          <Button
            className="button"
            children={<Icon />}
            onClick={() => updateText(textValue)}
            style={
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
                  }
            }
          />
        </div>
        <div className="switchContainer">
          <Switch />
          <img
            src={theme === "dark" ? Moon : Sun}
            alt={theme === "dark" ? "Moon" : "Sun"}
            className="icon"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
