import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%"
};

const darkMap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

const initialCenter = { lat:  -22.245053, lng: -54.822179 };

// const libraries = ["places"]; // Add this
interface MyComponentProps {
  setCustomLocation: React.Dispatch<any>;
  customLocation: any;
  setAddress: React.Dispatch<any>;
  setSelectedOption: React.Dispatch<any>;
}

export function GoogleMaps({customLocation,setCustomLocation,setSelectedOption}:MyComponentProps){

    const { isLoaded } = useJsApiLoader({ googleMapsApiKey:"AIzaSyA8431Ti3hFrTifFsj93xAVTx7IW0QLlDI" });
    const [center, setCenter] = useState(initialCenter);
    if (!isLoaded) {
        return <></>;
    }

    // Function to handle marker drag end
    const handleDragEnd = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            if (e.latLng) {
                const lat = e.latLng.lat() +9; 
                const lng = e.latLng.lng() +9 ;
                setCenter({ lat, lng });
                setCustomLocation({ lat, lng });
                setSelectedOption("");
            }
        }
    };

    return(
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={customLocation}
                zoom={16}
                options={{
                    styles: darkMap,    
                    disableDefaultUI: true, // Desabilita a interface padrão do Google Maps
                    zoomControl: false, // Mantém o controle de zoom
                }}
            >

                <Marker
                    visible
                    position={customLocation}
                    draggable
                    onDragEnd={handleDragEnd}
                />

            </GoogleMap>
        </>
    )
}