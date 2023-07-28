import React from 'react';
import { useAppContext } from '..//contexts/AppContext'; // 1. Importé useAppContext
import Search from '../components/Search/Search';
// import Results from '../components/Results/Results';
import FeaturedShows from '../components/FeaturedShows/FeaturedShows';

const HomeContainer = () => {
  const { showsData, handleGetShows, loading } = useAppContext();
  return (
    <>
      <div>
        <h1>Bienvenidos! Buscá tu show</h1>
        {/* 1. Desplegué el componente Search a modo de section */}
        <Search />
        <FeaturedShows/>
      </div>
    </>
  );
};

export default HomeContainer;
