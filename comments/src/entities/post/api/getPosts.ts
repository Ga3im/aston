export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Ошибка загрузки");
  const data = await response.json(); 
  return data;
};