import React from "react";
import Input from "./components/Input";
import Map from "./components/Map";
import { LocationProvider } from "./context/LocationContext";
import "./App.css";

export default function App() {
  return (
    <LocationProvider>
      <main className="relative flex flex-col items-center justify-center h-screen w-full">
        <div className="absolute top-0 w-full z-20 flex flex-col items-center justify-center gap-y-6 mt-6 px-8">
          <h1>
            <span className="text-white text-2xl font-bold">
              IP Address Tracker
            </span>
          </h1>
          <Input />
        </div>

        <div className="bg-mobile-pattern bg-cover bg-center bg-no-repeat w-full h-2/5 z-10"></div>

        <div className="relative w-full h-3/5 z-10">
          <Map />
        </div>
      </main>
    </LocationProvider>
  );
}
