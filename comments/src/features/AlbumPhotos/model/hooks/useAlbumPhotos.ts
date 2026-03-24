import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useAlbumPhotos = () => {
  const { id } = useParams<{ id: string }>();
  const [photos, setPhotos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [id]);

  return { photos, isLoading };
};
