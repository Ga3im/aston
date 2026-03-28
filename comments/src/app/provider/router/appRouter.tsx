import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostListPage } from "../../../pages/PostListPage/ui/PostListPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/ui/PostDetailsPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/ui/UserTodosPage";
import { UserLayout } from "../../../pages/UserPage/ui/UserPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/ui/AlbumPhotosPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/ui/UserAlbumsPage";
import { UserListPage } from "../../../pages/UserListPage/ui/UserListPage";
import { CommentListPage } from "../../../pages/CommentListPage/ui/CommentListPage";
import { CommentDetailsPage } from "../../../pages/CommentDetailPage/ui/CommentDetailPage";
import { AlbumListPage } from "../../../pages/AlbumListPage/ui/AlbumListPage";
import { AlbumDetailsPage } from "../../../pages/AlbumDetailPage/ui/AlbumDetailPage";
import { PhotoListPage } from "../../../pages/PhotoListPage/ui/PhotoListPage";
import { PhotoDetailPage } from "../../../pages/PhotoDetailPage/ui/PhotoDetailPage";
import { TodoDetailPage } from "../../../pages/TodoDetailPage/ui/TodoDetailPage";
import { TodoListPage } from "../../../pages/TodoListPage/ui/TodoListPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/ui/UserPostsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" replace /> },
      { path: "posts", element: <PostListPage /> },
      { path: "posts/:id", element: <PostDetailsPage /> },
      { path: "comments", element: <CommentListPage /> },
      { path: "comments/:id", element: <CommentDetailsPage /> },
      { path: "albums", element: <AlbumListPage /> },
      { path: "albums/:id", element: <AlbumDetailsPage /> },
      { path: "photos", element: <PhotoListPage /> },
      { path: "photos/:id", element: <PhotoDetailPage /> },
      { path: "todos", element: <TodoListPage /> },
      { path: "todos/:id", element: <TodoDetailPage /> },
      { path: "users", element: <UserListPage /> },

      {
        path: "users/:id",
        element: <UserLayout />,
        children: [
          { path: "posts", element: <UserPostsPage /> },
          { path: "albums", element: <UserAlbumsPage /> },
          { path: "todos", element: <UserTodosPage /> },
        ],
      },
      { path: "albums/:id/photos", element: <AlbumPhotosPage /> },
    ],
  },
]);
