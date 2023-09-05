function Button({
  children = "Button",
  onClick = () => {},
  className = "",
  style = {},
}) {
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}

export default Button;
