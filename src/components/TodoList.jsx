import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import { useState } from "react";

export default function TodoList({ data }) {
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
      {data.map((_data) => (
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
