import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ForecastChart({ weather }) {
  const [metric, setMetric] = useState(
    localStorage.getItem("metric") || "temperature_2m_max"
  );

  useEffect(() => {
    localStorage.setItem("metric", metric);
  }, [metric]);

  const labels = weather.daily.time;
  const dataPoints = weather.daily[metric];

  const data = {
    labels,
    datasets: [
      {
        label: metric,
        data: dataPoints,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="card">
    <select
      className="metric-select"
      value={metric}
      onChange={(e) => setMetric(e.target.value)}
    >
      <option value="temperature_2m_max">Max Temp</option>
      <option value="temperature_2m_min">Min Temp</option>
      <option value="precipitation_sum">Precipitation</option>
      <option value="windspeed_10m_max">Wind Speed</option>
    </select>

    <Line data={data} />
  </div>
  );
}