import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useLocation } from "../context/LocationContext";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function MapUpdater() {
  const { coordinates } = useLocation();
  const map = useMap();

  useEffect(() => {
    if (coordinates.lat && coordinates.lng) {
      map.setView([coordinates.lat, coordinates.lng], 13);
    }
  }, [coordinates, map]);

  return null;
}

export default function Map() {
  const { coordinates } = useLocation();

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates.lat, coordinates.lng]} />
      <MapUpdater />
    </MapContainer>
  );
}
