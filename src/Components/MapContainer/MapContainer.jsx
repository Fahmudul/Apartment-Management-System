import { useRef, useState } from "react";
import ApartmentMap from "../ApartmentMap/ApartmentMap";
import {
  Autocomplete,
  useJsApiLoader,
  DirectionsRenderer,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
const libraries = ["places"];
const MapContainer = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  const [center, setCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  async function calculateRoute() {
    console.log("clicked");
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  return isLoaded ? (
    <div className="flex pb-5">
      <div className="w-[30%]  min-h-28 border-2  bg-white ">
        <Autocomplete>
          <input
            type="text"
            name="yourlocation"
            className="block mb-2 p-3 rounded-xl"
            ref={originRef}
          />
        </Autocomplete>
        <Autocomplete>
          <input
            type="text"
            name="destination"
            className=" p-3 rounded-xl"
            ref={destiantionRef}
            defaultValue={"Space Apartments, Gulshan, Dhaka, Bangladesh"}
          />
        </Autocomplete>
        <button className="btn" onClick={() => map.panTo(center)}>
          Set
        </button>
        <button className="btn" onClick={calculateRoute}>
          Find
        </button>
      </div>{" "}
      <div className="w-[70%]">
        <GoogleMap
          mapContainerStyle={{ height: "70vh", width: "100%" }}
          center={center}
          zoom={15}
          onLoad={(map) => setMap(map)}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MapContainer;
