import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import styles from '../FeaturedShows/FeaturedShows.module.css';
// import Show from '../Show/Show';

const FeaturedShows = () => {
  const {getShows} = useAppContext();
  console.log(getShows);
  return (
    <>
      <h1 className={styles.title}>Search results</h1>
      {/* Armo el div contenedor, con GRID */}
      <div className={`grid ${styles.SearchResultsContainer}`}>
        {/* Hago un map: ciclo de repetición. Para que muestre 3 Shows*/}
        {getShows.map((show) => (
          <div key={show}>
            <useAppContext id={show} className={'.col_4'}/>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeaturedShows;
