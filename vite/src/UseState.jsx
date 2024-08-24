import { useState } from "react";
import Button from "./components/Button";

function UseState() {
  const [num, setNum] = useState(0);
  const [username, setUsername] = useState("123");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    "Shopping",
    "Learning",
    "Chae ki Hotel",
    "Cricket",
  ]);

  const addTodo = () => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      {/* useState with array */}
      <input
        className="border p-1"
        value={todo}
        placeholder="ADD TODO"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button text={"Add"} onClick={addTodo} />
      {todos.map((data, ind) => (
        <h1 key={ind} className="bg-red-100 border  rounded-md">
          {data}
        </h1>
      ))}

      {/* use state with input */}
      {/* <h1>
        <a href="https://react.dev/reference/react/useState">
          <span className="underline font-bold">Use State</span>
        </a>
        with Input
      </h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-1"
        placeholder="Learning Use State with Input"
      />
      <Button text={"Submit"} onClick={() => console.log(username)} /> */}

      {/* use state with number */}
      {/* <h1>Use State with Number</h1> */}
      {/* <h1 className="text-3xl my-2">Count {num} </h1>
      <Button text={"+2"} onClick={() => setNum(num + 2)} />
      <Button text={"+3"} onClick={() => setNum(num + 3)} />
      <Button text={"+4"} onClick={() => setNum(num + 4)} />
      <Button text={"+5"} onClick={() => setNum(num + 5)} /> */}
    </div>
  );
}

export default UseState;
