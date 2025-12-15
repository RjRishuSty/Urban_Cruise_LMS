import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { CssBaseline } from "@mui/material";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import AuthInitializer from "./components/AuthInitializer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <AuthInitializer>
            <App />
          </AuthInitializer>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
