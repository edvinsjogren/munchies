import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Logo from './components/Logo';
import { fetchRestaurants, fetchFilters } from './api/api';
import RestaurantGrid from './components/RestaurantGrid';
import { cookies } from 'next/headers';
import SplashModal from './components/SplashModal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Munchies - Treat yourself.',
    template: '%s | Munchies',
  },
  description:
    'Find the best restaurants in your city and get it delivered to your place!',
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  const categories = await fetchFilters();
  const splashCookie = cookies().get('splash');

  return (
    <>
      {!splashCookie ? (
        <SplashModal />
      ) : (
        <>
          <Logo color="black" />
          <div className="flex w-full gap-5">
            <Sidebar categories={categories} />
            <div className="flex w-full flex-col gap-6">
              <Topbar categories={categories} />
              <RestaurantGrid restaurants={restaurants} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
