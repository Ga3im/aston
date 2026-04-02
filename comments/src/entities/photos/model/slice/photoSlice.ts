import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { photoApi } from "../../api/PhotoApi";
import type { Photo } from "../types";

const photoAdapter = createEntityAdapter<Photo>();

export const photoSlice = createSlice({
  name: "photo",
  initialState: photoAdapter.getInitialState(),
  reducers: {
    removePhoto: photoAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      photoApi.endpoints.getPhotos.matchFulfilled,
      (state, action) => {
        photoAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const postsSelectors = photoAdapter.getSelectors(
  (state: any) => state.photo
);

export default photoSlice.reducer;
