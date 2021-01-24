import React, { useState } from "react";
import SearchBar from "../searchBar";
import InfoCardDeck from "../infoCardDeck";

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);

  const updateWeatherInfo = (data) => {
    const filteredList = weatherData.filter((info) => info.name !== data.name);
    filteredList.push(data);
    setWeatherData([...filteredList]);
  };

  const deleteWeatherInfo = (id) => {
    const filteredList = weatherData.filter((info) => info.id !== id);
    setWeatherData([...filteredList]);
  };

  return (
    <div>
      <SearchBar updateWeatherInfo={updateWeatherInfo} />
      <InfoCardDeck
        weatherData={weatherData}
        closeHandler={deleteWeatherInfo}
      />
    </div>
  );
};
