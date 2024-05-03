import Filter from '../types/Filter';
import { Restaurant } from '../types/Restaurant';
import fetchWrapper from './fetchWrapper';

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const restaurants = await fetchWrapper<{
      restaurants: Restaurant[];
    }>('/restaurants').then((data) => data.restaurants);

    const populatedRestaurants = await Promise.all(
      restaurants.map(async (restaurant) => {
        try {
          const openStatusData = await fetchWrapper<{
            restaurant_id: string;
            is_open: boolean;
          }>(`/open/${restaurant.id}`).then((data) => data.is_open);

          const priceRangeData = await fetchWrapper<{
            id: string;
            range: string;
          }>(`/price-range/${restaurant.price_range_id}`).then(
            (data) => data.range,
          );

          return {
            ...restaurant,
            is_currently_open: openStatusData,
            price_range: priceRangeData,
          };
        } catch (error) {
          console.error(
            `Error fetching additional details for restaurant ID ${restaurant.id}:`,
            error,
          );
          return restaurant;
        }
      }),
    );

    return populatedRestaurants;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const fetchRestaurant = async (id: string): Promise<Restaurant> => {
  try {
    const restaurant = await fetchWrapper<Restaurant>(`/restaurants/${id}`);
    try {
      const openStatusData = await fetchWrapper<{
        restaurant_id: string;
        is_open: boolean;
      }>(`/open/${restaurant.id}`).then((data) => data.is_open);

      const priceRangeData = await fetchWrapper<{ id: string; range: string }>(
        `/price-range/${restaurant.price_range_id}`,
      ).then((data) => data.range);

      return {
        ...restaurant,
        is_currently_open: openStatusData,
        price_range: priceRangeData,
      };
    } catch (error) {
      console.error(
        `Error fetching additional details for restaurant ID ${restaurant.id}:`,
        error,
      );
      return restaurant;
    }
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    throw error;
  }
};

export const fetchFilters = async (): Promise<Filter[]> => {
  try {
    const filters = await fetchWrapper<{ filters: Filter[] }>('/filter').then(
      (data) => data.filters,
    );

    return filters;
  } catch (error) {
    console.error('Error fetching filters:', error);
    throw error;
  }
};
