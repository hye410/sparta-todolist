import "../App.css";
import { useTodo } from "../context/todosContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

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
