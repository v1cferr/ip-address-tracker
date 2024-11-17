import React from "react";
import Input from "./components/Input";
import Map from "./components/Map";
import { LocationProvider } from "./context/LocationContext";
import logo from "./assets/v1cferr-logo.svg";
import "./App.css";

export default function App() {
  return (
    <LocationProvider>
      <a
        href="https://github.com/v1cferr/ip-address-tracker"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={logo}
          alt="@v1cferr - Logo"
          className="fixed top-2.5 right-2.5 w-10 h-10 z-30 transition-all duration-300 ease-in-out hover:cursor-pointer bg-[#FDFDFD] rounded-xl p-2 shadow-md"
        />
      </a>
      <main className="relative flex flex-col items-center justify-center h-screen w-full">
        <div className="absolute top-0 w-full z-20 flex flex-col items-center justify-center gap-y-6 mt-6 px-8">
          <h1>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-300 ease-in-out">
              IP Address Tracker
            </span>
          </h1>
          <Input />
        </div>

        <div className="bg-mobile-pattern md:bg-desktop-pattern bg-cover bg-center bg-no-repeat w-full h-2/5 md:h-1/3 z-10 transition-all duration-300 ease-in-out"></div>

        <div className="relative w-full h-3/5 md:h-2/3 z-10">
          <Map />
        </div>
      </main>
    </LocationProvider>
  );
}
