import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useUserAlbums = () => {
  const { userId } = useParams<{ userId: string }>();
  const [albums, setAlbums] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setIsLoading(false);
      });
  }, [userId]);

  return { albums, isLoading };
};
