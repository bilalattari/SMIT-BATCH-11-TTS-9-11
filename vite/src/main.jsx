import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UseState from "./UseState.jsx";
import UseEffect from "./UseEffect.jsx";
import Weather from "./Weather.jsx";

createRoot(document.getElementById("root")).render(<Weather />);
