import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  const [showsData, setShowsData] = useState(defaultValue);
  const [singleShowData, setSingleShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  //1. declaro la funcion handleGetShows y hago llamada a API
  const handleGetShows = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      console.log(response);
      setShowsData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    console.log(setShowsData);
  };

  // useEffect(() => {
  //   handleGetShows();
  // }, [query]);

  //2. declaro la funcion handleGetShows y hago llamada a API
  const handleGetSingleShow = async (id) => {
    try {
      setShowLoading(true);
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setSingleShowData(response.data);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
    console.log(setShowsData);
  };

  // useEffect(() => {
  //   handleGetShows();
  // }, [id]);

  return (
    <AppContext.Provider
      value={{
        showsData,
        handleGetShows,
        loading,
        singleShowData,
        handleGetSingleShow,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppProvider, AppContext };
