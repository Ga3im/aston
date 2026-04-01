import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    getPostById: builder.query<Post[], number | string>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (_result, _error, postId) => [{ type: "Post", postId }],
    }),
    getUserPosts: builder.query<Post[], number | string>({
      query: (userId) => `/users/${userId}/posts`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Post" as const, id })), "Post"]
          : ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetUserPostsQuery } =
  postsApi;
