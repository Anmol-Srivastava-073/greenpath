"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Next.js + Leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView({ points }: { points: any[] }) {
  return (
    <div style={{ height: "500px", width: "100%", marginTop: 20 }}>
      <MapContainer
        center={[20.5937, 78.9629]} // Default center: India
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Free OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* Waste markers */}
        {points.map((p) => (
          <Marker key={p.id} position={[p.latitude, p.longitude]}>
            <Popup>
              <div>
                <strong>Waste Type:</strong> {p.waste_type} <br />
                <strong>Bin:</strong> {p.bin_type}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
