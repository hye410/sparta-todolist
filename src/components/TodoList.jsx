import { useState } from "react";
import { useTodo } from "../context/useTodo";

export default function TodoList() {
  const { todos: data, deleteTodo, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState({});
  const [editTodo, setEditTodo] = useState({});

  const handleDelete = (deletedTarget) => {
    deleteTodo(deletedTarget);
  };

  const handleEdit = (id) => {
    if (isEditing[id]) {
      updateTodo(editTodo);
      setIsEditing({ [id]: false });
      delete editTodo[id];
    } else {
      setIsEditing({ [id]: true });
    }
  };

  return (
    <ul id="todoList">
      {data?.map((_data) => (
        <li key={`todoList_${_data.id}`}>
          {_data.todo}
          {isEditing[_data.id] && (
            <input
              value={editTodo[_data.id] || ""}
              onChange={(e) => setEditTodo({ [_data.id]: e.target.value })}
            />
          )}
          <div>
            <button onClick={() => handleEdit(_data.id)}>
              {isEditing[_data.id] ? "완료" : "수정"}
            </button>
            <button
              value={_data.id}
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
