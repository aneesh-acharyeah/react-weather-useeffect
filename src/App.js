import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("London");
  const [query, setQuery] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = ""; // Replace with your real OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      if (!query) return;
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city.trim());
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🌤️ Weather Forecast</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="info">Loading weather...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="card">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p>{weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {Math.round(weather.wind.speed)} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
