import { useUserLocation } from '../hooks/useUserLocation';
import { useCurrentWeather } from '../hooks/useWeather';
import { weatherCodeMap } from '../utils/weatherCodeMap';
import WeatherLoadingCard from './WeatherLoadingCard';
import WeatherErrorCard from './WeatherErrorCard';

// Componente para mostrar el clima actual
export function WeatherCard() {
  const { location, error } = useUserLocation();

  // Esperar a que location esté disponible
  if (!location) {
    return <WeatherLoadingCard message="Obteniendo ubicación..." />;
  }

  // Obtener el clima actual
  const { weather, loading } = useCurrentWeather(location.lat, location.lon);

  // Mostrar carga mientras se obtiene el clima
  if (loading) {
    return <WeatherLoadingCard message="Cargando clima actual..." />;
  }

  // Manejar error al obtener el clima
  if (!weather) {
    return <WeatherErrorCard message="No se pudo cargar el clima" />;
  }

  // Mostrar el clima actual
  return (
    <div className="fixed top-4 right-4 bg-white p-4 shadow w-64 text-gray-800">
      <h2 className="text-lg font-semibold mb-2">Clima actual</h2>
      <p className="text-sm text-gray-600">{new Date(weather.time).toLocaleDateString('es-AR')}</p>
      <p className="text-xl font-bold mt-2">
        {weatherCodeMap[weather.weathercode] ?? 'Condición desconocida'}
      </p>
      <div className="flex justify-between mt-2">
        <span>🌡️ {weather.temperature}°C</span>
        <span>💨 {weather.windspeed} km/h</span>
      </div>
      {error && <p className="text-xs text-yellow-600 italic mt-2">{error}</p>}
    </div>
  );
}
