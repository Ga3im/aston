import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useUserTodos = () => {
  const { todoId } = useParams<{ todoId: string }>();
  const [todos, setTodos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${todoId}/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [todoId]);

  return {todos, isLoading};
};
