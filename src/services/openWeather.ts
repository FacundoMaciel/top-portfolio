// Service to interact with Open-Meteo API for weather data
import type { CurrentWeather } from '../types/weather';

export async function getWeatherForecast(lat: number, lon: number): Promise<CurrentWeather> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error al obtener clima actual: ${res.status}`);
  const data = await res.json();

  if (!data.current_weather) throw new Error('Respuesta sin clima actual');

  return data.current_weather;
}
