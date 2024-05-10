import { getDeliveryTimeRange } from '../utils/filter_utils';
import TextBody from './typography/TextBody';

interface StatusBadgeProps {
  isCurrentlyOpen: boolean | undefined;
  deliveryTime: number;
}

const StatusBadge = ({ isCurrentlyOpen, deliveryTime }: StatusBadgeProps) => {
  const { deliveryTimeLabel } = getDeliveryTimeRange(deliveryTime);
  const badgeStyles =
    'rounded-full border-small border-stroke bg-white px-3 py-2 text-black shadow-box-shadows [&>*]:leading-none';

  return (
    <div className="z-10 flex gap-1 ">
      <span className={`flex items-center gap-1 ${badgeStyles}`}>
        <span
          className={`inline-block h-2 w-2 rounded ${isCurrentlyOpen ? 'bg-green' : 'bg-black'}`}
        />
        <TextBody>{isCurrentlyOpen ? 'Open' : 'Closed'}</TextBody>
      </span>
      {isCurrentlyOpen && (
        <span className={badgeStyles}>
          <TextBody>{deliveryTimeLabel}</TextBody>
        </span>
      )}
    </div>
  );
};

export default StatusBadge;
