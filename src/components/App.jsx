import { useReducer } from "react";
import "../App.css";
// import { useTodo } from "../context/todoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoReducer from "../reducer/todoReducer";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <article>
      <h1>TodoList</h1>
      <AddTodo addTodo={dispatch} />
      {todos.length === 0 ? (
        <div>todo를 추가해 주세요.</div>
      ) : (
        <TodoList todos={todos} dispatch={dispatch} />
      )}
    </article>
  );
}

export default App;
