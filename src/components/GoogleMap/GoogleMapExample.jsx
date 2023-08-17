import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import './google-map.css'
import { useEffect, useState } from 'react';

function GoogleMapExample() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyANMtJTKAtFKL5sBPkvbrhyyhayI4I3iC4",
  });

  if (!isLoaded) return <div>loading</div>;
  return (
    <div> <div>
    <Map />
  </div></div>
  )
}
function Map() {
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      const croods = {
        lat: crd.latitude,
        lng: crd.longitude,
      };
      setCenter(croods);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

 
  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
       <MarkerF
        icon={{  scaledSize: new window.google.maps.Size(1000, 1000) }}
        onClick={() => console.log("my location")}
        position={center}
      />
    </GoogleMap>
  );
}

export default GoogleMapExample