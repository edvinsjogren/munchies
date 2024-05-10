'use client';
import FilterCard from './FilterCard';
import { Filter } from '../types/Filter';
import { useFilterParams } from '../hooks/useFilterParams';
import TextSubtitle from './typography/TextSubtitle';
import { deliveryTimeRanges, priceRanges } from '../utils/filter_utils';
import FilterButton from './FilterButton';

interface TopbarProps {
  categories: Filter[];
}

function Topbar({ categories }: TopbarProps) {
  const { toggleFilter, isFilterActive } = useFilterParams();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5 lg:hidden">
        <TextSubtitle>Delivery time</TextSubtitle>
        <div className="flex flex-wrap gap-2">
          {deliveryTimeRanges.map((range) => (
            <FilterButton
              key={range.value}
              name={range.label}
              isActive={isFilterActive.deliveryTime(range.value)}
              toggleFilter={() => toggleFilter.deliveryTime(range.value)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2.5 lg:hidden">
        <TextSubtitle>Price range</TextSubtitle>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <FilterButton
              key={range.value}
              name={range.label}
              isActive={isFilterActive.priceRange(range.value)}
              toggleFilter={() => toggleFilter.priceRange(range.value)}
            />
          ))}
        </div>
      </div>
      <div className="scrollbar-hide -ml-6 flex w-screen gap-2 overflow-x-scroll scroll-smooth whitespace-nowrap pl-6 md:ml-0 md:w-full md:flex-wrap md:overflow-hidden md:pl-0">
        {categories.map((category) => (
          <FilterCard
            key={category.id}
            name={category.name}
            img={category.image_url}
            alt={`${category.name} category image`}
            isActive={isFilterActive.foodCategory(category.id)}
            toggleFilter={() => toggleFilter.foodCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Topbar;
