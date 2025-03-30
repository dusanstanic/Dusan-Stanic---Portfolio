import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import "@/styles/variables.scss";
import "@/styles/theme.scss";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
