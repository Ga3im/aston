import { useParams } from "react-router-dom";
import { PostList } from "../../../widgets/PostList/PostList ";
import { useGetUserPostsQuery } from "../../../entities/post/api/postApi";

export const UserPostsPage = () => {
  const { userId } = useParams();
  const { data: posts, isLoading, error } = useGetUserPostsQuery(userId ?? "");

  return <PostList posts={posts} isLoading={isLoading} error={error} />;
};
