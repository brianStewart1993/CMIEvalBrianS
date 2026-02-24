import { useState } from "react";
import { getCoordinates, getWeather } from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError(null);

      const coords = await getCoordinates(city);
      const data = await getWeather(coords.latitude, coords.longitude);

      setCityName(coords.name);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return { weather, cityName, loading, error, fetchWeather };
}