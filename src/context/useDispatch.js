import { createContext, useContext } from "react";

export const TodosDispatchContext = createContext(null);

export const useDispatch = () => {
  const context = useContext(TodosDispatchContext);
  if (!context)
    throw new Error("TodoDispatchContext 내부에서만 사용할 수 있습니다.");
  return context;
};
