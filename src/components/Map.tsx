import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// TODO: Use the longitude and latitude from as a prop
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
    // Longitude and Latitude are inverted because Leaflet expects them in the order [latitude, longitude]
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
