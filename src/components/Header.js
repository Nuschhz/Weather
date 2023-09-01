import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Button from "./Button";
import Input from "./Input";
import Switch from "./Switch";
import ComboBox from "./ComboBox";

import { IconSearch } from "@tabler/icons-react";

function Header({ updateText = () => {} }) {
  const Icon = () => {
    return <IconSearch color="white" stroke={2} />;
  };

  return (
    <header className="header">
      <div className="content">
        <ComboBox />
        <div className="inputContainer">
          <Input
            placeholder="Busque uma cidade..."
            className="input"
            updateText={updateText}
          />
          <Button className="button" children={<Icon />} />
        </div>
        <Switch />
      </div>
    </header>
  );
}

export default Header;
