interface Props {
  message: string;
}

export default function WeatherErrorCard({ message }: Props) {
  return (
    <div className="fixed top-4 right-4 bg-white p-4 shadow rounded w-64 text-gray-800">
      <p className="text-sm text-red-500">{message}</p>
    </div>
  );
}