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
      query: (id) => `/albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Album", id }],
    }),
    getUserAlbums: builder.query<Album[], number | string>({
      query: (id) => `/users/${id}/albums`,
      providesTags: (_result, _error, id) => [{ type: "Album", id }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetUserAlbumsQuery,
} = albumApi;
