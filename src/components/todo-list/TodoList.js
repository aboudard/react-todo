// list of Todo items

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { TodoService } from "../../services/todo.service";
import { Button } from "primereact/button";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getTodos().then((data) => setTodos(data));
  }, []);

  const editTodo = (id) => {
    console.log(id);
  }

  const actionTemplate = (todo) => {
    return (
      <>
        <Button label="Edit" icon="pi pi-check" size="small" onClick={() => editTodo(todo.id)} />
      </>
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="card">
        <DataTable size="small" value={todos} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="ID"></Column>
          <Column field="title" header="Title"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="description" header="Description"></Column>
          <Column header="Actions" body={actionTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default TodoList;
