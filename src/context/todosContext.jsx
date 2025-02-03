import { createContext, useContext, useReducer } from "react";
import TodoReducer from "../reducer/todoReducer";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodosContext.Provider value={{ todos }}>
      <TodosDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("error");
  return context;
};

export const useDispatch = () => {
  const context = useContext(TodosDispatchContext);
  if (!context) throw new Error("error");
  return context;
};
