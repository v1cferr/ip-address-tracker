import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// WIP: I will use them later
// interface MapProps {
//   lng: number;
//   lat: number;
// }

export default function Map() {
  const myData = {
    location: {
      country: "BR",
      lat: -23.71056,
      lng: -46.41333,
    },
    isp: "",
  };

  const myLongitude = myData.location.lng;
  const myLatitude = myData.location.lat;

  return (
    // Latitude and Longitude are inverted because Leaflet expects them in the order [latitude, longitude]
    <MapContainer
      id="map"
      center={[myLatitude, myLongitude]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[myLatitude, myLongitude]}>
        <Popup>Based on your IP address, you are here.</Popup>
      </Marker>
    </MapContainer>
  );
}
