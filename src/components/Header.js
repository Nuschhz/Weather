import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Moon from "../images/moon.png";

import Button from "./Button";
import Input from "./Input";
import Switch from "./Switch";

import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function Header({ updateText = () => {} }) {
  const Icon = () => {
    return <IconSearch color="white" stroke={2} />;
  };

  const [textValue, setTextValue] = useState();

  return (
    <header className="header">
      <div className="content">
        <div className="inputContainer">
          <Input
            placeholder="Busque uma cidade..."
            className="input"
            updateText={updateText}
            textValue={textValue}
            setTextValue={setTextValue}
          />
          <Button
            className="button"
            children={<Icon />}
            onClick={() => updateText(textValue)}
          />
        </div>
        <div className="switchContainer">
          <Switch />
          <img src={Moon} alt="moon" className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
