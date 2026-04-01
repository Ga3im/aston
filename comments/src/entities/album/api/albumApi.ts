import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../model/types";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Album"],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "/albums",
      providesTags: ["Album"],
    }),
    getAlbumById: builder.query<Album, number | string>({
      query: (albumId) => `/albums/${albumId}`,
      providesTags: (_result, _error, albumId) => [{ type: "Album", albumId }],
    }),
    getUserAlbums: builder.query<Album[], number | string>({
      query: (albumId) => `/users/${albumId}/albums`,
      providesTags: (_result, _error, albumId) => [{ type: "Album", albumId }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetUserAlbumsQuery,
} = albumApi;
