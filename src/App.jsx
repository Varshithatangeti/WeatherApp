import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const APIKEY = "d30617ad6a3024ab46f04d82411f760e";

  const handleSubmit = (event) => {
    event.preventDefault();
    const lat = event.target.elements.latitude.value;
    const long = event.target.elements.longitude.value;

    if (!isNaN(lat) && !isNaN(long) && lat !== "" && long !== "") {
      fetchData(lat, long);
    } else {
      setError("Please enter valid latitude and longitude.");
      setWeather(null);
    }
  };

  const fetchData = async (lat, long) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${APIKEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={handleSubmit} />
      {error && <p className="error">{error}</p>}
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
