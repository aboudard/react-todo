import { Button } from "primereact/button";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoDetail from "./components/todo-detail/TodoDetail";
import TodoList from "./components/todo-list/TodoList";
import { TodosContext } from "./contexts/todos.context";
import Todo from "./todo/Todo";
import Menu from "./components/menu/menu";

const App = () => {
  const [todosState] = useContext(TodosContext);
  return (
    <>
      <div className="p-3 grid">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col">
          <h1>{todosState.title}</h1>
          <Todo
            onEditState={(todo) => {
              console.log("todo", todo);
            }}
          />
          <Button size="small" label="Click" />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
