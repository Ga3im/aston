import { memo, useCallback, type ChangeEvent } from "react";
import styles from "./FilterByLength.module.css";
import type { SortOrder } from "../../../shared/lib/sort/sortByLenght";
import { useTheme } from "../../../shared/lib/theme/useTheme";

type PostLengthFilterType = {
  onChange: (value: SortOrder) => void;
};

export const FilterByLength = memo(({ onChange }: PostLengthFilterType) => {
  const { theme } = useTheme();

  const handleSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOrder;
    onChange(value);
  }, [onChange]);

  const labelTheme =
    theme === "dark" ? `${styles.label} ${styles.labelDark}` : styles.label;
  const selectTheme =
    theme === "dark" ? `${styles.select} ${styles.selectDark}` : styles.select;

  return (
    <div className={styles.container}>
      <span className={labelTheme}>Сортировать заголовки:</span>
      <select className={selectTheme} onChange={handleSortChange}>
        <option value="none">По умолчанию</option>
        <option value="asc">Сначала короткие</option>
        <option value="desc">Сначала длинные</option>
      </select>
    </div>
  );
});

