import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { commentsApi } from "../../api/commentApi";
import type { Comment } from "../types";

const commentsAdapter = createEntityAdapter<Comment>();

export const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    removePost: commentsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      commentsApi.endpoints.getComments.matchFulfilled,
      (state, action) => {
        commentsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const commentsSelectors = commentsAdapter.getSelectors(
  (state: any) => state.comment
);

export default commentsSlice.reducer;
