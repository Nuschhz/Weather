import Weather from "./components/Weather";
import Header from "./components/Header";

import "./hooks/useThemeContext";
import { ThemeContext } from "./hooks/useThemeContext";
import { useContext, useState } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const [textValue, setTextValue] = useState();

  return (
    <ThemeContext.Provider value={theme.light}>
      <Header text={textValue} updateText={setTextValue} />
      <Weather city={textValue} />
    </ThemeContext.Provider>
  );
}

export default App;
