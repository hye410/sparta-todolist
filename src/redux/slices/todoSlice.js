import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: crypto.randomUUID(),
  //   todo: "독서",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   todo: "주식 방송 챙겨보기",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   todo: "코딩하기",
  // },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
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
