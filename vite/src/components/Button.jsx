import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ text, onClick, isLoading }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
    ${theme == "light" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}
    p-1 px-4 m-1 rounded  `}
    >
      {isLoading ? "loading.." : text}
    </button>
  );
}

export default Button;
