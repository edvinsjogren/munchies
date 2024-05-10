// contexts/FilterContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterState {
  foodCategory: string[];
  priceRange: string[];
  deliveryTime: string[];
}

interface FilterContextProps {
  filters: FilterState;
  setFilter: (type: keyof FilterState, value: string[]) => void;
  toggleFilter: (type: keyof FilterState, item: string) => void;
  isFilterActive: (type: keyof FilterState, id: string) => boolean;
}

interface FilterContextProviderProps {
  children: ReactNode;
}

const defaultContext: FilterContextProps = {
  filters: { foodCategory: [], priceRange: [], deliveryTime: [] },
  setFilter: () => {},
  toggleFilter: () => {},
  isFilterActive: () => false,
};

const FilterContext = createContext<FilterContextProps>(defaultContext);

function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [filters, setFilters] = useState<FilterState>(defaultContext.filters);

  const setFilter = (type: keyof FilterState, value: string[]) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const toggleFilter = (type: keyof FilterState, item: string) => {
    setFilters((prev) => {
      const newArray = prev[type].includes(item)
        ? prev[type].filter((i) => i !== item)
        : [...prev[type], item];
      return { ...prev, [type]: newArray };
    });
  };

  const isFilterActive = (type: keyof FilterState, id: string): boolean => {
    return filters[type].includes(id);
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilter, toggleFilter, isFilterActive }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};

export default FilterContextProvider;
