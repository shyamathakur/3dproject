import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";
import { CharacterAnimationProvider } from "./context/CharacterAnimation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}
    >
      <CharacterAnimationProvider>
        <App />
      </CharacterAnimationProvider>
    </MantineProvider>
  </React.StrictMode>
);
