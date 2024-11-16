import React from "react";

// This is a React Context that manages location (coordinates) globally in the application.
// It provides a way to share and update location data between components without prop drilling.

// Import required React hooks
import { createContext, useContext, useState } from "react";

// Define the context type with coordinates (latitude and longitude)
// and a function to update these coordinates
type LocationContextType = {
  coordinates: {
    lat: number;
    lng: number;
  };
  setCoordinates: (coords: { lat: number; lng: number }) => void;
};

// Create the context with initial value of undefined
const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

// LocationProvider component that wraps the application and provides coordinate state
// to all child components. This allows any nested component to access and update
// the location data without passing props through every level.
export function LocationProvider({ children }: { children: React.ReactNode }) {
  // State to store coordinates, initialized at 0,0
  // This state will be shared across all components that use the useLocation hook
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  return (
    <LocationContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
}

// Custom hook to access the location context
// This hook provides a convenient way to access and update coordinates from any component
// It throws an error if used outside of LocationProvider to prevent runtime errors
export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
