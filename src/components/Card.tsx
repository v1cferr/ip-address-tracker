import React from "react";

interface CardProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
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
}: CardProps) {
  return (
    <ol className="bg-white rounded-xl p-4 w-full max-w-3xl shadow-xl flex flex-col gap-6 items-center ">
      <CardItem title="IP Address" value={ipAddress} />
      <CardItem title="Location" value={location} />
      <CardItem title="Timezone" value={timezone} />
      <CardItem title="ISP" value={isp} />
    </ol>
  );
}