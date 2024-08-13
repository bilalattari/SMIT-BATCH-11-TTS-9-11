import "./App.css";
import ThemeButton from "./components/ThemeButton";
function App() {
  return (
    <div className="p-20 flex justify-center items-center flex-col">
      <ThemeButton text={"Hello Button"} />
      <ThemeButton text={"Blue  Button"} bgColor={"bg-blue"} />
      <ThemeButton text={"Orange Button"} bgColor={"bg-orange"} />
      <ThemeButton text={"Black Button"} bgColor={"bg-black"} />
      <ThemeButton text={"White Button"} bgColor={"bg-white"}
      txtColor={'text-black'} />
    </div>
  );
}

export default App;
