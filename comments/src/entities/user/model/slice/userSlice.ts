import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { User } from "../types";
import { usersApi } from "../../api/usersApi";

const usersAdapter = createEntityAdapter<User>();

export const usersSlice = createSlice({
  name: "post",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    removeUsers: usersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        usersAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const usersSelectors = usersAdapter.getSelectors(
  (state: any) => state.user
);

export default usersSlice.reducer;
