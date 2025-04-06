import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextApi from "./componentes/auth/context/ContextApi.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </StrictMode>
);
