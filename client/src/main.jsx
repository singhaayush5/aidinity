import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import UserStateProvider from "./context/user/userstate";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
      alt:"#cc8899"
    },
    secondary: {
      main: "#8E5BEB",
    },
    tertiary: {
      main: "#dadada",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  button: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserStateProvider>
        <App />
      </UserStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
