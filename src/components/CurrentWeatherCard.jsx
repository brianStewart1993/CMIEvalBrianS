export default function CurrentWeatherCard({ weather, city }) {
  const current = weather.current_weather;

  return (
    <div className="card">
        <h2 className="weather-title">{city}</h2>
        <p className="weather-stat">
            <span>Temperature:</span> {current.temperature}°C
        </p>
        <p className="weather-stat">
            <span>Wind Speed:</span> {current.windspeed} km/h
        </p>
    </div>
  );
}

const cardStyle = {
  padding: "1rem",
  borderRadius: "8px",
  background: "#f3f3f3",
  marginBottom: "1rem",
};