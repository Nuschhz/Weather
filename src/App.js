import Weather from "./components/Weather";
import Header from "./components/Header";

import "./hooks/useThemeContext";
import { ThemeContext } from "./hooks/useThemeContext";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={theme.light}>
      <Header />
      <Weather />
    </ThemeContext.Provider>
  );
}

export default App;
