import { useState } from "react";
import { useDispatch } from "../context/todosContext";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useDispatch();

  const handleAddTodo = () => {
    setTodo("");
    dispatch({ type: "add", id: crypto.randomUUID(), todo });
  };
  return (
    <div id="addTodo">
      <label>
        Todo :
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      </label>
      <button onClick={handleAddTodo}>추가</button>
    </div>
  );
}
