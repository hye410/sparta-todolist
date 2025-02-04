import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function AddTodo() {
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
      <button onClick={handleAddTodo}>추가</button>
    </div>
  );
}
