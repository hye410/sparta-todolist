import { useState } from "react";
import { TodosContext } from "./useTodo";

// const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (newTodo) => {
    const newTodos = todos.map((todo) => {
      return todo.id === Object.keys(newTodo)[0]
        ? { ...todo, todo: newTodo[todo.id] }
        : todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (deletedId) => {
    const newTodos = todos.filter(({ id }) => id !== deletedId);
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

// export const useTodo = () => {
//   const context = useContext(TodoContext);
//   if (!context) throw new Error("");
//   return context;
// };
