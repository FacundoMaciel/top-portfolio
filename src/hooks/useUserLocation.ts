import { useEffect, useState } from 'react';

export function useUserLocation(defaultLocation = { lat: -27.48, lon: -58.83 }) {
  const [location, setLocation] = useState<{ lat: number; lon: number }>(defaultLocation);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalización no disponible en este navegador');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => {
        console.warn('Error de geolocalización:', err);
        setError('No se pudo obtener tu ubicación. Mostrando clima de Corrientes.');
        setLocation(defaultLocation); // fallback automático
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return { location, error };
}