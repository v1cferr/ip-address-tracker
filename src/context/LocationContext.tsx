import React from "react";

import { createContext, useContext, useState } from "react";

type LocationContextType = {
  coordinates: {
    lat: number;
    lng: number;
  };
  setCoordinates: (coords: { lat: number; lng: number }) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  return (
    <LocationContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
