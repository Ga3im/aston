import { useGetPostsQuery } from "../../../entities/post/api/postApi";
import { PostList } from "../../../widgets/PostList/PostList ";

export const PostListPage = () => {
  const { data: posts = [], isLoading, error } = useGetPostsQuery();

  return <PostList posts={posts} isLoading={isLoading} error={error} />;
};
