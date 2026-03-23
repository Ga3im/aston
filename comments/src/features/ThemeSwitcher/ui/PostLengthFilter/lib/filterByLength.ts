
export type SortOrder = 'asc' | 'desc' | 'none';

type WithTitle = {
  title: string;
}

export const sortByTitleLength = <T extends WithTitle>(
  items: T[], 
  order: SortOrder
): T[] => {
  const itemsCopy = [...items];

  if (order === 'none') {
    return items;
  }

  return itemsCopy.sort((a, b) => {
    const lengthA = a.title.length;
    const lengthB = b.title.length;

    if (order === 'asc') {
      return lengthA - lengthB;
    }
    
    return lengthB - lengthA;
  });
};
