import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Route.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ThemeContextProvider>
      <AppRouter />
    </ThemeContextProvider>
  </UserContextProvider>
);
