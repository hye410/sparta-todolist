import { useSelector } from "react-redux";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <article>
      <h1>TodoList</h1>
      <TodoAdd />
      {todos.length === 0 ? (
        <div>todo를 추가해 주세요.</div>
      ) : (
        <TodoList data={todos} />
      )}
    </article>
  );
}

export default App;
