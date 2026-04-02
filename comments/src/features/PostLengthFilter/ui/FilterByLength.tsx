import type { ChangeEvent } from "react";
import styles from "./FilterByLength.module.css";
import type { SortOrder } from "../lib/filterByLength";
import { useTheme } from "../../../shared/lib/theme/useTheme";

type PostLengthFilterType = {
  onChange: (value: SortOrder) => void;
};

export const FilterByLength = ({ onChange }: PostLengthFilterType) => {
  const { theme } = useTheme();

  const handleSortChange = (
    e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>
  ) => {
    const value = e.target.value as SortOrder;
    onChange(value);
  };

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
};
