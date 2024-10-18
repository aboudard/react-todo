// list of Todo items

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useContext, useEffect } from "react";
import { TodosContext } from "../../contexts/todos.context";
import { TodoService } from "../../services/todo.service";
import { InputSwitch } from "primereact/inputswitch";

const TodoList = () => {
  const [state, dispatch] = useContext(TodosContext);

  useEffect(() => {
    TodoService.getTodos().then((data) =>
      dispatch({ type: "SET_TODOS", payload: data })
    );
  }, []);

  const editTodo = (todo) => {
    dispatch({ type: "TOGGLE_EDIT_MODE", payload: todo });
  };

  const setChecked = (todo) => {
    console.log("todo", todo);
    dispatch({ type: "SET_TODO_ACTIVE", payload: todo });
  };

  const actionTemplate = (todo) => {
    return (
      <>
        <Button
          label="Edit"
          icon="pi pi-check"
          size="small"
          onClick={() => editTodo(todo)}
        />
        <InputSwitch checked={todo.active} onChange={(e) => setChecked(todo)} />
      </>
    );
  };

  return (
    <div>
      <h1>Todo List - {state.isEditMode ? "edit" : "read"}</h1>
      <div className="card">
        <DataTable
          size="small"
          value={state.todos}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="id" header="ID"></Column>
          <Column field="title" header="Title"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="description" header="Description"></Column>
          <Column header="Actions" body={actionTemplate}></Column>
        </DataTable>
        <div>
          {JSON.stringify(state.todos)}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
