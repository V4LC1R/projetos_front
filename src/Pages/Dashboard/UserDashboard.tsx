import { useEffect, useState } from "react";
import {setKey,fromLatLng} from "react-geocode";
import { useUser } from "@context/UserContext";
import Maps from "@components/Maps";

interface Address {
  address: string;
  // location: GeocodeResult | null;
}

interface CustomLocation {
  lat: number;
  lng: number;
}

export function UserDashboard()
{
    const {user} = useUser()

    const [address, setAddress] = useState<Address>({
        address: "1600 Amphitheatre Parkway, Mountain View, CA"
    });
    const [customLocation, setCustomLocation] = useState<CustomLocation | null>(
        null
    );
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const [selectedOption, setSelectedOption] = useState<string>("");
    // const [locationMain,setLocationMain]=useState<Address>({address:""})

    useEffect(() => {
        setKey("AIzaSyA8431Ti3hFrTifFsj93xAVTx7IW0QLlDI");
        setCustomLocation({ lat:  -22.245053, lng: -54.822179 });
    }, []);

  useEffect(() => {
    //if (customLocation) {
      fromLatLng(
        -22.245053,
        -54.822179
      )
        .then((response) => {
          const address = response.results[0].formatted_address;
          setAddress((prevAddress) => ({ ...prevAddress, address }));
          handleDrawerToggle();
          console.log(response, "response");
          //({ lat, lng });
          console.log("Address Aakash:", address);
        })
        .catch((error) => {
          console.error("Error while geocoding:", error);
        });
    
  }, [customLocation]);

  useEffect(() => {
    console.log(customLocation, "location Main Page");
  }, [customLocation]);

    return (
        <>
          
          <Maps
              customLocation={customLocation}
              setCustomLocation={setCustomLocation}
              setAddress={setAddress}
              setSelectedOption={setSelectedOption}
          />
        </>
                    
    )
}