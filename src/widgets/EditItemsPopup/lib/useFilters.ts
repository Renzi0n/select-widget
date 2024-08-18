import { ELEMENTS } from "__mocks__";
import { useState, useMemo, ChangeEvent, useCallback } from "react";

export const useFilters = () => {
  const [currentFilter, setFilter] = useState<number>(0);
  const [currentSearch, setSearch] = useState<string>("");

  const filteredItems = useMemo(
    () =>
      ELEMENTS.filter(
        ({ value, label }) =>
          value > currentFilter &&
          label.toLowerCase().includes(currentSearch.toLowerCase())
      ),
    [currentFilter, currentSearch]
  );

  const onSearchInputChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    []
  );

  const onApplySelectOption = useCallback(
    (value: number) => setFilter(value),
    []
  );

  return {
    onSearchInputChange,
    onApplySelectOption,
    filteredItems,
  };
};
