'use client';
import { getFilterStyles } from '../../utils/style_utils';
import TextBody from './typography/TextBody';

interface FilterButtonProps {
  name: string;
  isActive: boolean;
  toggleFilter: () => void;
}

function FilterButton({ name, isActive, toggleFilter }: FilterButtonProps) {
  const filterStyles = getFilterStyles(isActive);

  return (
    <button
      onClick={() => toggleFilter()}
      className={`w-max rounded-lg border-small border-stroke px-3 py-2 shadow-box-shadows [&>*]:leading-none ${filterStyles}`}
    >
      <TextBody>{name}</TextBody>
    </button>
  );
}

export default FilterButton;
