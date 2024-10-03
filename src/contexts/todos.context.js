import { createContext, useReducer } from "react";
import { initialState, todosReducer } from "../reducers/todos.reducer";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const value = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
