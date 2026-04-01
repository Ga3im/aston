import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { TodoCard } from "../../../entities/todo/ui/TodoCard";
import { useUserTodos } from "../../../features/UserTodos/model/hooks/useUserTodos";

export const UserTodosPage = () => {
  const { todos, isLoading } = useUserTodos();
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
