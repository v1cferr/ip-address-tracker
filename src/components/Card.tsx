import React from "react";

interface CardProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
  localTime: string;
}

interface CardItemProps {
  title: string;
  value: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, value }) => (
  <li className="flex flex-col gap-[0.5px] md:gap-y-1 text-center md:text-left md:border-r md:last:border-r-0 md:px-6 break-words md:first:pl-0 md:last:pr-0 transition-all duration-300 ease-in-out">
    {value ? (
      <>
        <h2 className="text-xs text-dark-gray uppercase font-[500] break-words transition-all duration-300 ease-in-out">
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
        <p className="text-base font-semibold text-very-dark-gray break-words transition-all duration-300 ease-in-out">
          {value}
        </p>
      </>
    ) : (
      <div className="animate-pulse space-y-3">
        <div className="h-4 bg-slate-200 rounded w-20"></div>
        <div className="h-6 bg-slate-200 rounded w-32"></div>
      </div>
    )}
  </li>
);

export default function Card({
  ipAddress,
  location,
  timezone,
  isp,
  localTime,
}: CardProps) {
  return (
    <ol className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl shadow-2xl flex flex-col md:flex-row md:items-stretch gap-y-6 md:gap-y-0 items-center transition-all duration-300 ease-in-out">
      <CardItem title="IP Address" value={ipAddress} />
      <CardItem title="Location" value={location} />
      <CardItem title="ISP" value={isp} />
      <CardItem title="Local Time" value={localTime} />
      <CardItem title="Timezone" value={timezone} />
    </ol>
  );
}
