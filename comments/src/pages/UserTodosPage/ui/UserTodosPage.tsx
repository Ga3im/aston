import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { TodoCard } from "../../../entities/todo/ui/TodoCard";
import { useParams } from "react-router-dom";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { useGetUserTodosQuery } from "../../../entities/todo/api/todoApi";

export const UserTodosPage = () => {
  const { userId } = useParams();
  const { data: todos = [], isLoading } = useGetUserTodosQuery(userId ?? "");

  if (isLoading)
    return (
      <div>
        <Skeleton length={8} />
      </div>
    );

  return (
    <div>
      <h2>Задачи пользователя</h2>
      <ItemList
        items={todos}
        renderItem={(todo) => <TodoCard todo={todo} />}
        keyExtractor={(todo) => todo.id}
        className={""}
      />
    </div>
  );
};
