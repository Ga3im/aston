import { useParams } from "react-router-dom";
import { PostList } from "../../../widgets/PostList/PostList ";
export const UserPostsPage = () => {
  const { postId } = useParams();
  return <PostList userId={postId} />;
};
