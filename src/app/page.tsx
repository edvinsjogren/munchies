import { fetchRestaurants, fetchFilters } from './api/api';
import { Metadata } from 'next';
import Home from './pages/Home';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Munchies - Treat yourself.',
    template: '%s | Munchies',
  },
  description:
    'Find the best restaurants in your city and get it delivered to your place!',
};

export default async function App() {
  const restaurants = await fetchRestaurants();
  const categories = await fetchFilters();

  return <Home restaurants={restaurants} categories={categories} />;
}
