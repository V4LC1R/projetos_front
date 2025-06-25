import React, { useRef, useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%"
};

const darkMap = [ /* seu estilo aqui... */ ];

const initialCenter = { lat: -22.245053, lng: -54.822179 };

interface MyComponentProps {
  setCustomLocation: React.Dispatch<any>;
  customLocation: any;
  setAddress: React.Dispatch<any>;
  setSelectedOption: React.Dispatch<any>;
}

export function GoogleMaps({
  customLocation,
  setCustomLocation,
  setSelectedOption,
}: MyComponentProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "SUA_API_KEY",
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onCenterChanged = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        const lat = center.lat();
        const lng = center.lng();
        setCustomLocation({ lat, lng });
        setSelectedOption("");
        // Se quiser: console.log("Nova posição:", lat, lng);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={customLocation}
        zoom={16}
        onLoad={onLoad}
        onCenterChanged={onCenterChanged}
        options={{
          disableDefaultUI: true,
          zoomControl: false,
        }}
      >
        {/* Marcador fixo no centro */}
        <Marker position={customLocation} visible />
      </GoogleMap>
    </>
  );
}
