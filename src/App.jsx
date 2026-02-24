import SearchBar from "./components/SearchBar";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastChart from "./components/ForecastChart";
import ErrorState from "./components/ErrorState";
import LoadingSpinner from "./components/LoadingSpinner";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { weather, cityName, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-container">
      <div className="header">
        <h1>Weather Insights Dashboard</h1>
      </div>

      <SearchBar onSearch={fetchWeather} />

      {loading && <div className="loading">Loading weather data...</div>}
      {error && <ErrorState message={error} />}

      {weather && (
        <div className="dashboard-grid">
          <CurrentWeatherCard weather={weather} city={cityName} />
          <ForecastChart weather={weather} />
        </div>
      )}
  </div>
  );
}

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "1rem",
};

export default App;