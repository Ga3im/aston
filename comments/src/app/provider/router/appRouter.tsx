import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostListPage } from "../../../pages/PostListPage/ui/PostListPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/ui/PostDetailsPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/ui/UserTodosPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/ui/UserPostsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/ui/AlbumPhotosPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/ui/UserAlbumsPage";
import { UserLayout } from "../../../widgets/user/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" replace /> },
      { path: "posts", element: <PostListPage /> },
      { path: "posts/:postId", element: <PostDetailsPage /> },
      {
        path: "users/:userId",
        element: <UserLayout />, 
        children: [
          { path: "posts", element: <UserPostsPage /> },
          { path: "albums", element: <UserAlbumsPage  /> },
          { path: "todos", element: <UserTodosPage /> },
        ],
      },
      { path: "albums/:albumId/photos", element: <AlbumPhotosPage /> },
    ],
  },
]);
