import { useState } from "react";
import { useTodo } from "../context/useTodo";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleAddTodo = () => {
    addTodo({ id: crypto.randomUUID(), todo });
    setTodo("");
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
