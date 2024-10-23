import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodosContext } from "../../contexts/todos.context";

const TodoDetail = () => {
  const { id } = useParams();
  const [state] = useContext(TodosContext);
  const todo = state.todos.find((todo) => todo.id === Number(id));

  return (
    <div>
      <h1>
        {todo.title} - {id}
      </h1>
    </div>
  );
};

export default TodoDetail;
