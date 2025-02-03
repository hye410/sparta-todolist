import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoAdd() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo({ id: crypto.randomUUID(), todo }));
    setTodo("");
  };
  return (
    <div id="addTodo">
      <label>
        Todo :
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      </label>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
