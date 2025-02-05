import { createContext, useContext } from "react";

export const TodosContext = createContext(null);

export const useTodo = () => {
  const context = useContext(TodosContext);
  if (!context)
    throw new Error("TodoContext Provider 내부에서만 사용할 수 있습니다.");
  return context;
};
