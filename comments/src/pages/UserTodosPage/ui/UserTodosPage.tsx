import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { TodoCard } from "../../../entities/todo/ui/TodoCard";
import { useGetUserTodosQuery } from "../../../entities/todo/api/todoApi";
import { useParams } from "react-router-dom";

export const UserTodosPage = () => {
  const { userId } = useParams();
  const { data: todos = [], isLoading } = useGetUserTodosQuery(userId ?? "");

  if (isLoading)
    return (
      <div>
        <PostListSkeleton length={8} />
      </div>
    );

  return (
    <div>
      <h2>Задачи пользователя</h2>
      <div>
        {todos.map((todo) => (
          <TodoCard key={todo.id} data={todo} />
        ))}
      </div>
    </div>
  );
};
