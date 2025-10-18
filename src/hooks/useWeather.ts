import { useEffect, useState } from 'react';
import { getWeatherForecast } from '../services/openWeather';
import type { CurrentWeather } from "../types/weather";

export function useCurrentWeather(lat: number, lon: number) {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeatherForecast(lat, lon)
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [lat, lon]);

  return { weather, loading };
}
