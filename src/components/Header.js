import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Moon from "../images/moon.png";

import Button from "./Button";
import Input from "./Input";
import Switch from "./Switch";

import { IconSearch } from "@tabler/icons-react";

function Header({ updateText = () => {} }) {
  const Icon = () => {
    return <IconSearch color="white" stroke={2} />;
  };

  return (
    <header className="header">
      <div className="content">
        <div className="doublesContainer">
          <Input
            placeholder="Busque uma cidade..."
            className="input"
            updateText={updateText}
          />
          <Button className="button" children={<Icon />} />
        </div>
        <div className="doublesContainer">
          <Switch />
          <img src={Moon} alt="moon" className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
