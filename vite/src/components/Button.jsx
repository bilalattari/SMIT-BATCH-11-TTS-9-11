function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="p-1 px-4 m-1 rounded bg-red-200">
      {text}
    </button>
  );
}

export default Button
