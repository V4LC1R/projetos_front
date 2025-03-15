import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

interface MyComponentProps {
  setCustomLocation: React.Dispatch<any>;
  setAddress: React.Dispatch<any>;
  setSelectedOption: React.Dispatch<any>;
}

const LocationSearchInput: React.FC<MyComponentProps> = ({
  setCustomLocation,
  setAddress,
  setSelectedOption
}) => {
  const [address, setChildAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<{
    lat: null | number;
    lng: null | number;
  }>({ lat: null, lng: null });

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setChildAddress(value);
    setAddress(value);
    setCoordinates(latLng);
    setCustomLocation(latLng);
    setSelectedOption(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setChildAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {coordinates.lat && coordinates.lng && (
        <div>
          Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
        </div>
      )}
    </div>
  );
};

export default LocationSearchInput;
