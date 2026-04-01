import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../model/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodo: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),
    getTodoById: builder.query<Todo, number | string>({
      query: (todoId) => `/todos/${todoId}`,
      providesTags: (_result, _error, todoId) => [{ type: "Todo", todoId }],
    }),
    getUserTodos: builder.query<Todo[], number | string>({
      query: (userId) => `/users/${userId}/todos`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Todo" as const, id })), "Todo"]
          : ["Todo"],
    }),
  }),
});

export const { useGetTodoQuery, useGetTodoByIdQuery, useGetUserTodosQuery } =
  todoApi;
