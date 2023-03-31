import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeContextProvider } from "./context/darkModeContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
