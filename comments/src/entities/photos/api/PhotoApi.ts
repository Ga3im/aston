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
      query: (photoId) => `/photos/${photoId}`,
      providesTags: (_result, _error, photoId) => [{ type: "Photo", photoId }],
    }),
    getAlbumPhotos: builder.query<Photo[], number | string>({
      query: (photoId) => `/albums/${photoId}/photos`,
      providesTags: (result, _error, photoId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photo" as const, id })),
              { type: "Photo", photoId },
            ]
          : [{ type: "Photo", photoId }],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useGetAlbumPhotosQuery,
} = photoApi;
