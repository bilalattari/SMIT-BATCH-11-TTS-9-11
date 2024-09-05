import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Route.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AppRouter />
  </ThemeContextProvider>
);
