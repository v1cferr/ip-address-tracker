import { useState } from "react";

export default function Input() {
  return (
    <form className="relative w-full shadow-xl max-w-3xl">
      <label htmlFor="ipAddress" className="sr-only">
        IP Address
      </label>
      <input
        type="text"
        id="ipAddress"
        name="ipAddress"
        className="w-full p-4 rounded-xl border-none outline-none text-very-dark-gray placeholder-dark-gray"
        placeholder="Buscar qualquer endereço IP"
      />
      <button
        type="submit"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black p-[21px] rounded-r-xl rounded-bl-none hover:bg-very-dark-gray">
        <img src="/images/icon-arrow.svg" alt="arrow" />
      </button>
    </form>
  );
}
