import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    setTodo("");
    addTodo({ type: "add", id: crypto.randomUUID(), todo });
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
