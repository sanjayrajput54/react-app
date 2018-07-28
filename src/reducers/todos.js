const todos = (state = [], action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "DELETE_TODO":
      debugger;
      var tempA = [];
      let index = state.findIndex(item => {
        return item.text === action.text;
      });
      if (index !== -1) {
        tempA = state;
        tempA.splice(index, 1);
      }
      return [...tempA];
    case "ADD_TODO":
      console.log([
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: true
        }
      ]);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
