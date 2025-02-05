import { useReducer } from "react";
import TodoReducer from "../reducer/todoReducer";
import { TodosContext } from "./useTodo";
import { TodosDispatchContext } from "./useDispatch";

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
