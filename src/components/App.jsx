import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import "../App.css";
import AddTodo from "./AddTodo";
function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <article>
      <h1>TodoList</h1>
      <AddTodo />
      {todos.length === 0 ? (
        <div>todo를 추가해 주세요.</div>
      ) : (
        <TodoList todos={todos} />
      )}
    </article>
  );
}

export default App;
