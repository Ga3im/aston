import type { ReactNode } from "react";

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  className?: string;
  emptyText?: string;
}

export const ItemList = <T,>({
  items,
  renderItem,
  keyExtractor,
  className,
  emptyText = "Список пуст",
}: ItemListProps<T>) => {
  if (items.length === 0) {
    return <div className="text-gray-400 p-4">{emptyText}</div>;
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={keyExtractor(item, index)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};