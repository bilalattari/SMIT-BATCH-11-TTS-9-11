import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Route.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ThemeContextProvider>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </ThemeContextProvider>
  </UserContextProvider>
);
