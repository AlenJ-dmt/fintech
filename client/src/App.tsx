import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Main } from "./components/Main";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
