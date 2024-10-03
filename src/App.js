import { Button } from "primereact/button";
import { useContext } from "react";
import "./App.css";
import TodoList from "./components/todo-list/TodoList";
import { TodosContext } from "./contexts/todos.context";

const App = () => {
  const [todosState] = useContext(TodosContext);
  return (
    <>
      <div className="p-3">
        <h1>{todosState.title}</h1>
        <h2>This is the App component</h2>
        <Button size="small" label="Click" />
        <TodoList />
      </div>
    </>
  );
};

export default App;
