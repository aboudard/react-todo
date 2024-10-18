// react Todo component

import { Button } from "primereact/button";
import React, { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";

const Todo = ({ onEditState }) => {
  const [todosState, dispatch] = useContext(TodosContext);

  const resetTodo = (todo) => {
    // reset the selected todo
    dispatch({ type: "SET_SELECTED_TODO", payload: null });
    onEditState(todo);
  };

  return (
    <>
      {!todosState.selectedTodo && <h2>No Todo selected</h2>}
      {todosState.selectedTodo && (
        <>
          <div className="flex flex-row flex-wrap align-items-center justify-content-center">
            <span className="mr-3">
              <strong>
                Current Todo component : {todosState.selectedTodo?.id} /{" "}
                {todosState.selectedTodo?.active ? "Active" : "Inactive"}
              </strong>
            </span>
            <Button
              label="Edit"
              icon="pi pi-times"
              size="small"
              onClick={() => resetTodo(todosState.selectedTodo)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Todo;
