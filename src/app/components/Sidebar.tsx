'use client';
import TextH1 from './typography/TextH1';
import TextSubtitle from './typography/TextSubtitle';
import FilterButton from './FilterButton';
import { useFilterParams } from '../hooks/useFilterParams';
import Filter from '../types/Filter';
import { deliveryTimeRanges, priceRanges } from '../../utils/filter_utils';

interface SidebarProps {
  categories: Filter[];
}

function Sidebar({ categories }: SidebarProps) {
  const { toggleFilter, isFilterActive } = useFilterParams();

  return (
    <div className="hidden w-60 flex-col gap-8 rounded-[10px] border-small border-stroke bg-white p-6 shadow-box-shadows lg:flex">
      <TextH1>Filter</TextH1>

      <div className="flex w-max flex-col gap-4">
        <TextSubtitle>Food category</TextSubtitle>
        <div className="flex flex-col gap-2.5">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              name={category.name}
              isActive={isFilterActive.foodCategory(category.id)}
              toggleFilter={() => toggleFilter.foodCategory(category.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
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

      <div className="flex flex-col gap-4">
        <TextSubtitle>Price range</TextSubtitle>
        <div className="flex flex-wrap gap-2 [&>*]:p-2">
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
    </div>
  );
}

export default Sidebar;
