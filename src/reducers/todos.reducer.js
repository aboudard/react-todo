export const initialState = {
  title: "React Todo App",
  isEditMode: false,
  todos: [],
  selectedTodo: null,
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
    case "SET_SELECTED_TODO":
      return { ...state, selectedTodo: action.payload };
    default:
      return state;
  }
};
