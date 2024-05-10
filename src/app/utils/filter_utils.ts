export const deliveryTimeRanges = [
  { min: 0, max: 10, value: '0-10', label: '0-10 min' },
  { min: 11, max: 30, value: '10-30', label: '10-30 min' },
  { min: 31, max: 60, value: '30-60', label: '30-60 min' },
  { min: 61, max: Infinity, value: '60+', label: '1 hour+' },
];

export function getDeliveryTimeRange(deliveryTimeMinutes: number) {
  const range = deliveryTimeRanges.find(
    (r) => deliveryTimeMinutes >= r.min && deliveryTimeMinutes <= r.max,
  );

  return range
    ? { deliveryTimeValue: range.value, deliveryTimeLabel: range.label }
    : {
        deliveryTimeValue: 'unknown',
        deliveryTimeLabel: 'Delivery time currently not available',
      };
}

export const priceRanges = [
  { value: '1', label: '$' },
  { value: '2', label: '$$' },
  { value: '3', label: '$$$' },
  { value: '4', label: '$$$$' },
];

export function getPriceRange(priceRange: string) {
  const range = priceRanges.find(
    (r) => r.label === priceRange || r.value === priceRange,
  );

  return range
    ? { priceRangeValue: range.value, priceRangeLabel: range.label }
    : {
        priceRangeValue: 'unknown',
        priceRangeLabel: '',
      };
}
