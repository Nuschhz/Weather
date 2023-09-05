function Input({
  placeholder = "Placeholder",
  className = "",
  updateText = () => {},
  textValue = "",
  setTextValue = () => {},
  style = {},
}) {
  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      updateText(e.target.value);
    }
  };

  return (
    <input
      placeholder={placeholder}
      value={textValue}
      onChange={(e) => handleOnChange(e)}
      onKeyDown={(e) => onEnter(e)}
      className={className}
      style={style}
    />
  );
}

export default Input;
