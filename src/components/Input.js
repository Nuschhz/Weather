import { useState } from "react";

function Input({
  placeholder = "Placeholder",
  value = "",
  onChange = () => {},
  className = "",
}) {
  const [textValue, setTextValue] = useState();

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      value={textValue}
      onChange={(e) => handleOnChange(e)}
      className={className}
    />
  );
}

export default Input;
