'use client';
import React from 'react';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import RestaurantGrid from '../components/RestaurantGrid';
import { Restaurant } from '../types/Restaurant';
import { Filter } from '../types/Filter';
import FilterContextProvider from '../context/FilterContext';

interface HomeProps {
  restaurants: Restaurant[];
  categories: Filter[];
}

function Home({ restaurants, categories }: HomeProps) {
  return (
    <FilterContextProvider>
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
