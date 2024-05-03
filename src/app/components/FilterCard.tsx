'use client';
import TextTitle from './typography/TextTitle';
import Image from 'next/image';
import { getFilterStyles } from '../../utils/style_utils';

interface FilterCardProps {
  name: string;
  img: string;
  alt: string;
  isActive: boolean;
  toggleFilter: () => void;
}

function FilterCard({
  name,
  img,
  alt,
  isActive,
  toggleFilter,
}: FilterCardProps) {
  const filterStyles = getFilterStyles(isActive);

  return (
    <button
      className={`relative flex h-20 min-w-40 cursor-pointer rounded-lg border-small border-stroke px-3 py-4 shadow-box-shadows transition xl:min-w-max xl:flex-1 ${filterStyles}`}
      onClick={() => toggleFilter()}
    >
      <TextTitle>{name}</TextTitle>
      <div className="absolute -right-2.5 top-0 h-20 w-20">
        <Image
          src={img}
          alt={alt}
          width={400}
          height={400}
          style={{ objectFit: 'contain', height: '100%', width: 'auto' }}
          priority
        />
      </div>
    </button>
  );
}

export default FilterCard;
