import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import GlobalStyles from "./styles/GlobalStyles.ts";
import { GlobalStorage } from "./context/WeatherContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStorage>
      <GlobalStyles />
      <App />
    </GlobalStorage>
  </React.StrictMode>
);
