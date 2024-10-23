export const initialState = {
  title: "React Todo App",
  isEditMode: false,
  todos: [],
  selectedTodo: null,
  error: null,
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT_MODE":
      return {
        ...state,
        isEditMode: !state.isEditMode,
        selectedTodo: action.payload,
      };
    case "SET_TODOS": {
      return { ...state, todos: action.payload };
    }
    case "SET_TODO_ACTIVE": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, active: !todo.active } : todo
        ),
      };
    }
    case "SET_SELECTED_TODO":
      return { ...state, selectedTodo: action.payload };
    case "SERVER_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
