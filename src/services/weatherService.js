const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function getCoordinates(city) {
  const res = await fetch(`${GEO_URL}?name=${city}&count=1`);
  if (!res.ok) throw new Error("Failed to fetch location");

  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error("City not found");

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
  };
}

export async function getWeather(latitude, longitude) {
  const res = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto`
  );

  if (!res.ok) throw new Error("Failed to fetch weather");

  return res.json();
}