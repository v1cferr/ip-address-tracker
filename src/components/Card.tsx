interface CardProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
  loading: boolean;
}

interface CardItemProps {
  title: string;
  value: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, value }) => (
  <li className="flex flex-col gap-0.5 text-center">
    <h2 className="text-xs text-dark-gray uppercase font-[500]">{title}</h2>
    <p className="text-lg font-bold text-very-dark-gray">{value}</p>
  </li>
);

export default function Card({
  ipAddress,
  location,
  timezone,
  isp,
  loading,
}: CardProps) {
  if (loading) {
    return (
      // TODO: É melhor adicionar um skeleton
      <div className="bg-white rounded-xl p-4 w-full max-w-3xl shadow-xl flex flex-col gap-y-6 items-center">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <ol className="bg-white rounded-xl p-4 w-full max-w-3xl shadow-xl flex flex-col gap-y-6 items-center ">
      <CardItem title="IP Address" value={ipAddress} />
      <CardItem title="Location" value={location} />
      <CardItem title="Timezone" value={`UTC ${timezone}`} />
      <CardItem title="ISP" value={isp} />
    </ol>
  );
}
