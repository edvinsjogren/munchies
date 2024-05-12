'use client';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import RestaurantGrid from '../components/RestaurantGrid';
import { Restaurant } from '../types/Restaurant';
import { Filter } from '../types/Filter';
import FilterContextProvider from '../context/FilterContext';
import SplashModal from '../components/SplashModal';
import { useEffect, useState } from 'react';
import { checkLastVisit } from '../utils/localStorage_utils';

interface HomeProps {
  restaurants: Restaurant[];
  categories: Filter[];
}

function Home({ restaurants, categories }: HomeProps) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const visitedInLastWeek = checkLastVisit();
    if (!visitedInLastWeek) {
      setModalOpen(true);
    }
  }, []);

  return (
    <FilterContextProvider>
      {modalOpen && <SplashModal setModalOpen={setModalOpen} />}
      <Logo color="black" />
      <div className="flex w-full gap-5">
        <Sidebar categories={categories} />
        <div className="flex w-full flex-col gap-6">
          <Topbar categories={categories} />
          <RestaurantGrid restaurants={restaurants} />
        </div>
      </div>
    </FilterContextProvider>
  );
}

export default Home;
