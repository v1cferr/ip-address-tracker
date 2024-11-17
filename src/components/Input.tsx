import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "../context/LocationContext";
import { format } from "date-fns";
import debounce from "lodash/debounce";
import Card from "./Card";
import arrowIcon from "../assets/icon-arrow.svg";

export default function Input() {
  const [value, setValue] = useState("");
  const [cardData, setCardData] = useState({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
    localTime: "",
  });
  const { setCoordinates } = useLocation();

  const getClientIp = async () => {
    const response = await fetch("https://api.ipquery.io/");
    const ip = await response.text();
    return ip;
  };

  const formatLocalTime = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "EEEE, MMMM d, yyyy, h:mm a");
  };

  const handleSubmit = useCallback(
    debounce(async (ipAddress?: string) => {
      const ipToSubmit = ipAddress || value;
      if (ipToSubmit === cardData.ipAddress) return;

      try {
        const response = await fetch(`https://api.ipquery.io/${ipToSubmit}`);
        const data = await response.json();

        setCoordinates({
          lat: data.location.latitude,
          lng: data.location.longitude,
        });

        setCardData({
          ipAddress: data.ip,
          location: `${data.location.city}, ${data.location.state}, ${data.location.country}`,
          timezone: data.location.timezone,
          isp: data.isp.isp || data.isp.org,
          localTime: formatLocalTime(data.location.localtime),
        });
      } catch (error) {
        console.error("Error fetching IP data", error);
      }
    }, 500),
    [value, cardData.ipAddress, setCoordinates]
  );

  useEffect(() => {
    const loadInitialIp = async () => {
      if (!cardData.ipAddress) {
        const clientIp = await getClientIp();
        handleSubmit(clientIp);
      }
    };

    loadInitialIp();
  }, [handleSubmit]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="relative w-full shadow-2xl max-w-3xl md:max-w-2xl transition-all duration-300 ease-in-out">
        <label htmlFor="ipAddress" className="sr-only">
          IP Address
        </label>
        <input
          type="text"
          id="ipAddress"
          name="ipAddress"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-4 rounded-2xl border-none outline-none text-very-dark-gray placeholder-dark-gray transition-all duration-300 ease-in-out"
          placeholder="Search for any IP address or domain"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black p-[21px] rounded-r-2xl rounded-bl-none hover:bg-very-dark-gray transition-all duration-300 ease-in-out">
          <img
            src={arrowIcon}
            width={12}
            height={12}
            alt="arrow"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </button>
      </form>
      <Card {...cardData} />
    </>
  );
}
