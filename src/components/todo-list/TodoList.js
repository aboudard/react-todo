// list of Todo items

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { Messages } from "primereact/messages";
import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TodosContext } from "../../contexts/todos.context";

const TodoList = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const [state, dispatch] = useContext(TodosContext);
  const apiUrl = API_URL + "/todos";
  const msgs = useRef(null);

  useEffect(() => {
    if (msgs.current && state.error) {
      msgs.current.clear();
      msgs.current.show({
        id: "1",
        sticky: true,
        severity: "error",
        summary: "Error",
        detail: "There are no todos available",
        closable: false,
      });
    }

    if (state.todos.length > 0 || state.error) {
      return;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TODOS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SERVER_ERROR", payload: error.message });
      });
  }, [dispatch, apiUrl, state.error, state.todos.length]);

  const goToDetail = (id) => {
    navigate(`/todo/${id}`);
  };

  const editTodo = (todo) => {
    dispatch({ type: "TOGGLE_EDIT_MODE", payload: todo });
  };

  const setChecked = (todo) => {
    console.log("todo", todo);
    dispatch({ type: "SET_TODO_ACTIVE", payload: todo });
  };

  const headerTemplate = (data) => {
    return (
      <div className="flex align-items-center gap-2">
        <i className="pi pi-android" style={{ fontSize: "2rem" }}></i>
        <span className="font-bold">{data.category}</span>
      </div>
    );
  };

  const actionTemplate = (todo) => {
    return (
      <>
        <Button
          label="View"
          icon="pi pi-eye"
          size="small"
          onClick={() => goToDetail(todo.id)}
        />

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
    <>
      <Messages ref={msgs} />

      {state.todos.length > 0 && (
        <>
          <h1>Todo List - {state.isEditMode ? "edit" : "read"}</h1>
          <div className="card">
            <DataTable
              rowGroupMode="subheader"
              groupRowsBy="category"
              sortMode="single"
              sortField="category"
              sortOrder={1}
              scrollable
              scrollHeight="400px"
              rowGroupHeaderTemplate={headerTemplate}
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
            <div>{JSON.stringify(state.todos)}</div>
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
