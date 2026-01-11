"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MapView({ points }: { points: any[] }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      center={{ lat: 20.5937, lng: 78.9629 }}
      zoom={5}
      mapContainerStyle={{ width: "100%", height: "500px" }}
    >
      {points.map((p) => (
        <Marker
          key={p.id}
          position={{
            lat: p.latitude,
            lng: p.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
}
