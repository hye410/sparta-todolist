import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import { useState } from "react";

export default function TodoList({ todos }) {
  const [isEditing, setIsEditing] = useState({});
  const [editTodo, setEditTodo] = useState({});

  const dispatch = useDispatch();

  const handleDelete = (deletedTarget) => {
    dispatch(deleteTodo(deletedTarget));
  };

  const handleEdit = (id) => {
    if (isEditing[id]) {
      dispatch(updateTodo(editTodo));
      setIsEditing({ [id]: false });
      delete editTodo[id];
    } else {
      setIsEditing({ [id]: true });
    }
  };

  return (
    <ul id="todoList">
      {todos.map((todo) => (
        <li key={`todoList_${todo.id}`}>
          {todo.todo}
          {isEditing[todo.id] && (
            <input
              value={editTodo[todo.id] || ""}
              onChange={(e) => setEditTodo({ [todo.id]: e.target.value })}
            />
          )}
          <div>
            <button onClick={() => handleEdit(todo.id)}>
              {isEditing[todo.id] ? "완료" : "수정"}
            </button>
            <button
              value={todo.id}
              onClick={(e) => handleDelete(e.target.value)}
            >
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
