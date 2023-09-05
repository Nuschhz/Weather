import Weather from "./components/Weather";
import Header from "./components/Header";

import "./hooks/useThemeContext";
import { ThemeContext } from "./hooks/useThemeContext";
import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState();
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <>
      <ThemeContext.Provider value={value}>
        <Header text={textValue} updateText={setTextValue} />
        <Weather city={textValue} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
