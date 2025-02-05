import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    updateTodo: (state, action) => {
      state.map((value) => {
        return value.id === Object.keys(action.payload)[0]
          ? (value.todo = action.payload[value.id])
          : value;
      });
    },
    deleteTodo: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
