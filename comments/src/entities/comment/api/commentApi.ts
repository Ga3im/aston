import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "/comments",
      providesTags: ["Comment"],
    }),
    getCommentById: builder.query<Comment, number | string>({
      query: (id) => `/comments/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Comment", id }],
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentByIdQuery } = commentsApi;
