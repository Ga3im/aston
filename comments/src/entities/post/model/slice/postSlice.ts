import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { type Post } from "../types";
import { postsApi } from "../../api/postApi";

const postsAdapter = createEntityAdapter<Post>();

export const postSlice = createSlice({
  name: "post",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    removePost: postsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const postsSelectors = postsAdapter.getSelectors(
  (state: any) => state.post
);

export default postSlice.reducer;
