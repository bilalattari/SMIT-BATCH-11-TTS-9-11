function ThemeButton({ text, bgColor, txtColor }) {
  return (
    <button
      className={`
        my-4
        ${bgColor ? bgColor : "bg-primary"}
        ${txtColor ? txtColor : "text-white"}
        `}
    >
      {text}
    </button>
  );
}

export default ThemeButton;
