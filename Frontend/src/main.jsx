import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import AuthInitializer from "./components/AuthInitializer.jsx";


// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{
            vertical: isMobile ? "bottom" : "top",
            horizontal: "center",
          }}
        >
          <AuthInitializer>
            <App />
          </AuthInitializer>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
