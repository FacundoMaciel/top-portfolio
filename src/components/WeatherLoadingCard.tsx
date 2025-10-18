interface Props {
  message?: string;
}

export default function WeatherLoadingCard({ message = 'Cargando...' }: Props) {
  return (
    <div className="fixed top-4 right-4 bg-white p-4 shadow rounded w-64 text-gray-800">
      <p className="text-sm text-gray-500 animate-pulse">{message}</p>
    </div>
  );
}