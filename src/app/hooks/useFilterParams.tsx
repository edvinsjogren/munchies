import { useQueryParam, StringParam } from 'use-query-params';

function useArrayQueryParam(key: string) {
  const [value, setValue] = useQueryParam(key, StringParam);

  const getArray = () => (value ? value.split(',') : []);
  const setArray = (array: string[]) => setValue(array.join(','));

  const toggleItem = (item: string) => {
    const array = getArray();
    setArray(
      array.includes(item) ? array.filter((i) => i !== item) : [...array, item],
    );
  };

  const isActive = (item: string) => getArray().includes(item);

  return { getArray, setArray, toggleItem, isActive };
}

export function useFilterParams() {
  const foodCategory = useArrayQueryParam('category');
  const priceRange = useArrayQueryParam('price');
  const deliveryTime = useArrayQueryParam('time');

  return {
    filters: {
      foodCategory: foodCategory.getArray(),
      priceRange: priceRange.getArray(),
      deliveryTime: deliveryTime.getArray(),
    },
    setFilters: {
      foodCategory: foodCategory.setArray,
      priceRange: priceRange.setArray,
      deliveryTime: deliveryTime.setArray,
    },
    toggleFilter: {
      foodCategory: foodCategory.toggleItem,
      priceRange: priceRange.toggleItem,
      deliveryTime: deliveryTime.toggleItem,
    },
    isFilterActive: {
      foodCategory: foodCategory.isActive,
      priceRange: priceRange.isActive,
      deliveryTime: deliveryTime.isActive,
    },
  };
}
