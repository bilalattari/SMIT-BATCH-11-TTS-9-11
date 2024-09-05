import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ text, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={`
    ${theme == "light" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}
    p-1 px-4 m-1 rounded  `}
    >
      {text}
    </button>
  );
}

export default Button;
