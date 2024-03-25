import { useState } from 'react';

export function useMobileFilterState(alwayOpen?: boolean) {
  const [isFilterOpen, setIsFilterOpen] = useState(alwayOpen ? true : false);

  function toggleFilter() {
    setIsFilterOpen(() => !isFilterOpen);
  }

  function closeModal() {
    setIsFilterOpen(false);
  }

  return {
    isFilterOpen,
    toggleFilter,
    closeModal
  };
}
