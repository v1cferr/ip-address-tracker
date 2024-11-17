import React from "react";
import Loading from "./Loading";

interface CardProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
  localTime: string;
  loading: boolean;
}

interface CardItemProps {
  title: string;
  value: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, value }) => (
  <li className="flex flex-col gap-[0.5px] text-center">
    <h2 className="text-xs text-dark-gray uppercase font-[500]">
      {title === "Local Time" ? (
        <>
          Local Time (
          <a
            href="https://time.is/UTC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline hover:text-blue-600">
            UTC
          </a>
          )
        </>
      ) : title === "ISP" ? (
        <>
          Internet Service Provider (
          <a
            href="https://en.wikipedia.org/wiki/Internet_service_provider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline hover:text-blue-600">
            ISP
          </a>
          )
        </>
      ) : (
        title
      )}
    </h2>
    <p className="text-base font-semibold text-very-dark-gray">{value}</p>
  </li>
);

export default function Card({
  ipAddress,
  location,
  timezone,
  isp,
  localTime,
  loading,
}: CardProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl p-4 w-full max-w-3xl shadow-xl flex flex-col gap-y-6 items-center">
        <Loading />
      </div>
    );
  }

  return (
    <ol className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-xl flex flex-col gap-y-6 items-center">
      <CardItem title="IP Address" value={ipAddress} />
      <CardItem title="Location" value={location} />
      <CardItem title="Timezone" value={timezone} />
      <CardItem title="ISP" value={isp} />
      <CardItem title="Local Time" value={localTime} />
    </ol>
  );
}
