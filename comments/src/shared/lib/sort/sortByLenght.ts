export type SortOrder = "asc" | "desc" | "none";

export const sortByLength = <T>(
  items: T[],
  order: SortOrder,
  key: keyof T
): T[] => {
  const itemsCopy = [...items];

  if (order === "none") {
    return items;
  }

  return itemsCopy.sort((a, b) => {
    const lengthA = String(a[key]).length;
    const lengthB = String(b[key]).length;

    if (order === "asc") {
      return lengthA - lengthB;
    }

    return lengthB - lengthA;
  });
};
