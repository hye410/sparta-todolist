import TodoList from "./TodoList";
import "../App.css";
import { useTodo } from "../context/todoContext";
import AddTodo from "./AddTodo";

function App() {
  const { todos } = useTodo();

  return (
    <article>
      <h1>TodoList</h1>
      <AddTodo />
      {todos.length === 0 ? <div>todo를 추가해 주세요.</div> : <TodoList />}
    </article>
  );
}

export default App;
