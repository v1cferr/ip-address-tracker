import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import Card from "./Card";
import Loading from "./Loading";

export default function Input() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
  });

  const getClientIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };

  const handleSubmit = useCallback(
    debounce(async (ipAddress?: string) => {
      const ipToSubmit = ipAddress || value;
      if (ipToSubmit === cardData.ipAddress) return;

      const apiKey = import.meta.env.PUBLIC_API_KEY;

      try {
        setLoading(true);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipToSubmit}`
        );

        const data = await response.json();
        console.log(data);

        setValue(data.ip);
        setCardData({
          ipAddress: data.ip,
          location: `${data.location.city}, ${data.location.region}, ${data.location.country}`,
          timezone: data.location.timezone,
          isp: data.isp !== "" ? data.isp : data.as.name,
        });
      } catch (error) {
        console.error("Error fetching IP data", error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [value, cardData.ipAddress]
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
      {loading ? (
        <div className="bg-white rounded-xl p-4 w-full max-w-3xl shadow-xl flex flex-col gap-y-6 items-center">
          <Loading />
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="relative w-full shadow-xl max-w-3xl">
          <label htmlFor="ipAddress" className="sr-only">
            IP Address
          </label>
          <input
            type="text"
            id="ipAddress"
            name="ipAddress"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-4 rounded-xl border-none outline-none text-very-dark-gray placeholder-dark-gray"
            placeholder="Search for any IP address"
            disabled={loading}
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black p-[21px] rounded-r-xl rounded-bl-none hover:bg-very-dark-gray"
            disabled={loading}>
            <img src="/images/icon-arrow.svg" alt="arrow" />
          </button>
        </form>
      )}
      {cardData.ipAddress && <Card {...cardData} loading={loading} />}
    </>
  );
}
