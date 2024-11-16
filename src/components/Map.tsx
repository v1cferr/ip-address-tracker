// This component uses react-leaflet to display an interactive map with a marker
// showing the current location coordinates from the LocationContext.

import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useLocation } from "../context/LocationContext";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// MapUpdater is a helper component that updates the map view when coordinates change
// It uses the useMap hook from react-leaflet to access the map instance
function MapUpdater() {
  const { coordinates } = useLocation();
  const map = useMap();

  // Update map view whenever coordinates change
  useEffect(() => {
    if (coordinates.lat && coordinates.lng) {
      map.setView([coordinates.lat, coordinates.lng], 13);
    }
  }, [coordinates, map]);

  return null; // This component doesn't render anything
}

// Main Map component that renders the interactive map
export default function Map() {
  // Get current coordinates from LocationContext
  const { coordinates } = useLocation();

  return (
    <MapContainer
      // Center the map at the current coordinates
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      zoomControl={false} // Hide default zoom controls
      style={{ height: "100%", width: "100%" }}>
      {/* Add the OpenStreetMap tile layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Add a marker at the current coordinates */}
      <Marker position={[coordinates.lat, coordinates.lng]} />
      {/* Include MapUpdater to handle coordinate changes */}
      <MapUpdater />
    </MapContainer>
  );
}
