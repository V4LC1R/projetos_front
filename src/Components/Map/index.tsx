import { useEffect, useState } from "react";
import {setKey,fromLatLng} from "react-geocode";
import { useUser } from "@context/UserContext";
import {GoogleMaps} from "./GoogleMap";
import { useInteration } from "@context/InterationContext";

interface Address {
  address: string;
  // location: GeocodeResult | null;
}

interface CustomLocation {
  lat: number;
  lng: number;
}

export function Map(){

  const {user} = useUser()
  const {location} = useInteration()

  const [address, setAddress] = useState<Address>({
      address: "1600 Amphitheatre Parkway, Mountain View, CA"
  });
  const [customLocation, setCustomLocation] = useState(
      {}
  );
 
  const [selectedOption, setSelectedOption] = useState<string>("");
  // const [locationMain,setLocationMain]=useState<Address>({address:""})

  useEffect(() => {
    setKey("AIzaSyA8431Ti3hFrTifFsj93xAVTx7IW0QLlDI");        
  }, []);

  async function setUpGeoLocation(){
    if(!location.latitude || !location.longitude)
      return

    setCustomLocation(()=>({ lat:  location.latitude, lng: location.longitude }));
    const data = await fromLatLng(location.latitude,location.longitude)
    console.log(data)
  }

  useEffect(() => {
    setUpGeoLocation()
    
  }, [location]);

  return (
    <>
      {
        (location.latitude && location.longitude ) &&
          <GoogleMaps
              position={customLocation}
              setCustomLocation={setCustomLocation}
              setAddress={setAddress}
          /> 
      }
      
    </>
                  
  )
}