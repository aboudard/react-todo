import { Button } from "primereact/button";
import { useContext } from "react";
import "./App.css";
import TodoList from "./components/todo-list/TodoList";
import { TodosContext } from "./contexts/todos.context";
import Todo from "./todo/Todo";

const App = () => {
  const [todosState] = useContext(TodosContext);
  return (
    <>
      <div className="p-3">
        <h1>{todosState.title}</h1>
        <Todo
          onEditState={(todo) => {
            console.log("todo", todo);
          }}
        />
        <Button size="small" label="Click" />
        <TodoList />
      </div>
    </>
  );
};

export default App;
