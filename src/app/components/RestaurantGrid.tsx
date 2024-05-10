'use client';
import { Restaurant } from '../types/Restaurant';
import RestaurantCard from './RestaurantCard';
import { useFilterParams } from '../hooks/useFilterParams';
import { getDeliveryTimeRange, getPriceRange } from '../utils/filter_utils';
import TextTitle from './typography/TextTitle';
import TextDisplay from './typography/TextDisplay';

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  const { filters } = useFilterParams();

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const { deliveryTimeValue } = getDeliveryTimeRange(
      restaurant.delivery_time_minutes,
    );
    const { priceRangeValue } = getPriceRange(restaurant.price_range);

    const filterConditions = [
      filters.foodCategory.length === 0 ||
        restaurant.filter_ids.some((filter) =>
          filters.foodCategory.includes(filter),
        ),

      filters.priceRange.length === 0 ||
        filters.priceRange.includes(priceRangeValue),

      filters.deliveryTime.length === 0 ||
        filters.deliveryTime.includes(deliveryTimeValue),
    ];

    return filterConditions.every((condition) => condition);
  });

  return (
    <div className="flex w-full flex-col gap-5">
      <TextDisplay>Restaurant´s</TextDisplay>
      <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2 lg:gap-[17px] xl:grid-cols-3">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              id={restaurant.id}
              img={restaurant.image_url}
              alt={`${restaurant.name} logo`}
              isCurrentlyOpen={restaurant.is_currently_open}
              deliveryTime={restaurant.delivery_time_minutes}
            />
          ))
        ) : (
          <TextTitle>No restaurants matches the selected filters.</TextTitle>
        )}
      </div>
    </div>
  );
}

export default RestaurantGrid;
