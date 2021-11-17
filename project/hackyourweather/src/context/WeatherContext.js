import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}`;

  const handleSearchButton = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setWelcome(true);
    try {
      const request = await fetch(baseUrl);
      if (request.status > 400) {
        setError(request.message);
        throw new Error(`I don't know any city with this name: "${search}".`);
      } else {
        const apiData = await request.json();
        setData([...data, apiData]);
        return apiData;
      }
    } catch (err) {
      setData([]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteCity = (id) => {
    const newCityList = data.filter((item) => item.id !== id);
    setData(newCityList);
  };
  const pageIsLoading = () => {
    setIsLoading(true);
  };
  const values = {
    search,
    data,
    setData,
    error,
    setError,
    welcome,
    handleSearchButton,
    fetchData,
    isLoading,
    setIsLoading,
    deleteCity,
    pageIsLoading,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
