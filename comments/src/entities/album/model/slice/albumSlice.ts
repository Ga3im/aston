import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { Album } from "../types";
import { albumApi } from "../../api/albumApi";

const albumAdapter = createEntityAdapter<Album>();

export const albumSlice = createSlice({
  name: "albums",
  initialState: albumAdapter.getInitialState(),
  reducers: {
    removePost: albumAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      albumApi.endpoints.getAlbums.matchFulfilled,
      (state, action) => {
        albumAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const albumSelectors = albumAdapter.getSelectors(
  (state: any) => state.comment
);

export default albumSlice.reducer;
