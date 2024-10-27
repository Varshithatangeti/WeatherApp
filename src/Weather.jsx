// src/Weather.js
import React from 'react';

const Weather = ({ data }) => {
  const {
    name,
    sys: { country, sunrise, sunset } = {},
    weather = [],
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity } = {},
    visibility,
    wind: { speed, deg } = {},
    clouds: { all: cloudiness } = {},
    rain,
  } = data || {};

  const formatTemperature = (kelvin) => (kelvin - 273.15).toFixed(2); // Convert Kelvin to Celsius

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  if (!name || !country) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in {name}, {country}</h2>
      <div className="weather-details">
        {weather.map((w) => (
          <div key={w.id} className="weather-condition">
            <img
              src={`http://openweathermap.org/img/wn/${w.icon}.png`}
              alt={w.description}
            />
            <p>{w.main} ({w.description})</p>
          </div>
        ))}
        {temp !== undefined && <p>Temperature: {formatTemperature(temp)} °C</p>}
        {feels_like !== undefined && <p>Feels Like: {formatTemperature(feels_like)} °C</p>}
        {temp_min !== undefined && <p>Min Temperature: {formatTemperature(temp_min)} °C</p>}
        {temp_max !== undefined && <p>Max Temperature: {formatTemperature(temp_max)} °C</p>}
        {pressure !== undefined && <p>Pressure: {pressure} hPa</p>}
        {humidity !== undefined && <p>Humidity: {humidity}%</p>}
        {visibility !== undefined && <p>Visibility: {visibility} meters</p>}
        {speed !== undefined && deg !== undefined && <p>Wind: {speed} m/s at {deg}°</p>}
        {cloudiness !== undefined && <p>Cloudiness: {cloudiness}%</p>}
        {rain && rain['1h'] !== undefined && <p>Rain (last hour): {rain['1h']} mm</p>}
        {sunrise !== undefined && <p>Sunrise: {formatTime(sunrise)}</p>}
        {sunset !== undefined && <p>Sunset: {formatTime(sunset)}</p>}
      </div>
    </div>
  );
};

export default Weather;
