import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Photo } from "../model/types";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Photo"],
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => "/photos",
      providesTags: ["Photo"],
    }),
    getPhotoById: builder.query<Photo, number | string>({
      query: (id) => `/photos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Photo", id }],
    }),
    getAlbumPhotos: builder.query<Photo[], number | string>({
      query: (id) => `/albums/${id}/photos`,
      providesTags: (result, _error, id) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photo" as const, id })),
              { type: "Photo", id },
            ]
          : [{ type: "Photo", id }],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useGetAlbumPhotosQuery,
} = photoApi;
