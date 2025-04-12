import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <img src={data.icon} alt={data.condition} />
      <p>Temperature: {data.temperature} °C</p>
      <p>Condition: {data.condition}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.wind} m/s</p>
    </div>
  );
};

export default WeatherCard;
