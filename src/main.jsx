import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextApiProvider from "./context/ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApiProvider>
        <App />
      </ContextApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
