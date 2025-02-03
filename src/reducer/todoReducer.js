function TodoReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          id: action.id,
          todo: action.todo,
        },
      ];
    case "delete": {
      return todos.filter(({ id }) => id !== action.id);
    }
    case "edit": {
      return todos.map((todo) => {
        return todo.id === Object.keys(action)[1]
          ? { ...todo, todo: action[todo.id] }
          : todo;
      });
    }
  }
}

export default TodoReducer;
