import "../styles/header.css";
import "../styles/input.css";
import "../styles/button.css";

import Button from "./Button";
import Input from "./Input";
import Switch from "./Switch";

import { IconSearch } from "@tabler/icons-react";

function Header() {
  const Icon = () => {
    return <IconSearch color="white" stroke={2} />;
  };

  return (
    <header className="header">
      <div className="content">
        <div className="inputContainer">
          <Input placeholder="Busque uma cidade..." className="input" />
          <Button className="button" children={<Icon />} />
        </div>
        <Switch />
      </div>
    </header>
  );
}

export default Header;
