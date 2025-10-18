import { useCurrentWeather } from '../hooks/useWeather';
import { weatherCodeMap } from '../utils/weatherCodeMap';

interface Props {
  lat: number;
  lon: number;
}

export function WeatherCard({ lat, lon }: Props) {
  const { weather, loading } = useCurrentWeather(lat, lon);

  if (loading) {
    return (
      <div className="fixed top-4 right-4 bg-white p-4 shadow rounded">
        <p className="text-gray-500">Cargando clima actual...</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="fixed top-4 right-4 bg-white p-4 shadow rounded">
        <p className="text-red-500">No se pudo cargar el clima actual</p>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 bg-white p-4 shadow rounded-4xl w-64 text-gray-800">
      <h2 className="text-lg font-semibold mb-2">Clima actual</h2>
      <p className="text-sm text-gray-600">{new Date(weather.time).toLocaleTimeString('es-AR')}</p>
      <p className="text-xl font-bold mt-2">{weatherCodeMap[weather.weathercode] ?? 'Condición desconocida'}</p>
      <div className="flex justify-between mt-2">
        <span>🌡️ {weather.temperature}°C</span>
        <span>💨 {weather.windspeed} km/h</span>
      </div>
    </div>
  );
}