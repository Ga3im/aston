import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { todoApi } from "../../api/todoApi";
import type { Todo } from "../types";

const todoAdapter = createEntityAdapter<Todo>();

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    removeTodo: todoAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      todoApi.endpoints.getTodo.matchFulfilled,
      (state, action) => {
        todoAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const todoSelectors = todoAdapter.getSelectors(
  (state: any) => state.todo
);

export default todoSlice.reducer;
