import "./App.css";
import TodoList from "./components/todo-list/TodoList";
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

const App = () => {
  return (
    <PrimeReactProvider>
      <h2>This is the App component</h2>
      <Button size="small" label="Click" />
      <TodoList />
    </PrimeReactProvider>
  );
};

export default App;
