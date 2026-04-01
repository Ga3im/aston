import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postApi";
import { usersApi } from "../../../entities/user/api/usersApi";
import { commentsApi } from "../../../entities/comment/api/commentApi";
import { albumApi } from "../../../entities/album/api/albumApi";
import { photoApi } from "../../../entities/photos/api/PhotoApi";
import { todoApi } from "../../../entities/todo/api/todoApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      albumApi.middleware,
      photoApi.middleware,
      todoApi.middleware,
      usersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
