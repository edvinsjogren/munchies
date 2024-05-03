import Image from 'next/image';
import StatusBadge from './StatusBadge';
import TextH1 from './typography/TextH1';
import TextBody from './typography/TextBody';
import Link from 'next/link';

interface RestaurantCardProps {
  name: string;
  id: string;
  img: string;
  alt: string;
  isCurrentlyOpen: boolean;
  deliveryTime: number;
}

function RestaurantCard({
  name,
  id,
  img,
  alt,
  isCurrentlyOpen,
  deliveryTime,
}: RestaurantCardProps) {
  return (
    <Link
      href={isCurrentlyOpen ? `/${id}` : ''}
      onClick={(e) => {
        if (!isCurrentlyOpen) {
          e.preventDefault();
        }
      }}
      className={`
        relative
        flex
        min-h-[200px]
        flex-col
        justify-between
        overflow-hidden
        rounded-lg
        border-small
        border-stroke
        bg-white
        p-4
        shadow-box-shadows
        ${isCurrentlyOpen ? 'cursor-pointer' : 'cursor-default'}
        ${isCurrentlyOpen && 'hover:bg-off-white'}
        `}
    >
      <StatusBadge
        isCurrentlyOpen={isCurrentlyOpen}
        deliveryTime={deliveryTime}
      />
      {!isCurrentlyOpen && (
        <div className="z-10 mx-auto rounded-lg border-small border-stroke bg-off-white px-3 py-2 shadow-box-shadows transition-colors [&>*]:leading-none">
          <TextBody>Opens tomorrow at 12 pm</TextBody>
        </div>
      )}
      <div
        className={`z-10 flex w-full items-end justify-between gap-12 text-start ${!isCurrentlyOpen && 'opacity-20'}`}
      >
        <TextH1>{name}</TextH1>
        <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-green">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6836 5C11.6836 5.17708 11.6107 5.33333 11.4648 5.46875L7.43359 9.49219C7.29818 9.6224 7.14453 9.6875 6.97266 9.6875C6.80078 9.6875 6.65495 9.63021 6.53516 9.51562C6.42057 9.40104 6.36328 9.25521 6.36328 9.07812C6.36328 8.99479 6.3763 8.91406 6.40234 8.83594C6.43359 8.75781 6.47786 8.69271 6.53516 8.64062L7.61328 7.52344L10.2539 5.14844L10.3945 5.48438L8.31641 5.63281H0.941406C0.753906 5.63281 0.602865 5.57292 0.488281 5.45312C0.373698 5.33333 0.316406 5.18229 0.316406 5C0.316406 4.81771 0.373698 4.66667 0.488281 4.54688C0.602865 4.42708 0.753906 4.36719 0.941406 4.36719H8.31641L10.3945 4.51562L10.2539 4.85938L7.61328 2.47656L6.53516 1.35938C6.47786 1.30729 6.43359 1.24219 6.40234 1.16406C6.3763 1.08594 6.36328 1.00521 6.36328 0.921875C6.36328 0.744792 6.42057 0.598958 6.53516 0.484375C6.65495 0.369792 6.80078 0.3125 6.97266 0.3125C7.14453 0.3125 7.29818 0.377604 7.43359 0.507812L11.4648 4.53125C11.6107 4.66667 11.6836 4.82292 11.6836 5Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div
        className={`absolute -right-8 -top-8 z-0 h-36 w-36 ${!isCurrentlyOpen && 'opacity-20'}`}
      >
        <Image
          src={img}
          alt={alt}
          width={400}
          height={400}
          style={{ objectFit: 'contain', height: '100%', width: 'auto' }}
        />
      </div>
    </Link>
  );
}

export default RestaurantCard;
