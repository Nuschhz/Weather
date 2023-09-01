import { useState } from "react";

function Input({
  placeholder = "Placeholder",
  className = "",
  updateText = () => {},
}) {
  const [textvalue, setValue] = useState();

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      updateText(e.target.value);
    }
  };

  return (
    <input
      placeholder={placeholder}
      value={textvalue}
      onChange={(e) => handleOnChange(e)}
      onKeyDown={(e) => onEnter(e)}
      className={className}
    />
  );
}

export default Input;
