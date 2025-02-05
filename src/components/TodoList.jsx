import { useState } from "react";
import { useTodo } from "../context/useTodo";
import { useDispatch } from "../context/useDispatch";

export default function TodoList() {
  const { todos } = useTodo();
  const { dispatch } = useDispatch();
  const [isEditing, setIsEditing] = useState({});
  const [editTodo, setEditTodo] = useState({});

  const handleDelete = (deletedTarget) => {
    dispatch({
      type: "delete",
      id: deletedTarget,
    });
  };

  const handleEdit = (id) => {
    if (isEditing[id]) {
      dispatch({
        type: "edit",
        ...editTodo,
      });
      setIsEditing({ [id]: false });
      delete editTodo[id];
    } else {
      setIsEditing({ [id]: true });
    }
  };

  return (
    <ul id="todoList">
      {todos?.map((todo) => (
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
