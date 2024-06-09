import { useRef, useState } from "react";
import ApartmentMap from "../ApartmentMap/ApartmentMap";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import {
  Autocomplete,
  useJsApiLoader,
  DirectionsRenderer,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import { toast } from "react-toastify";
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
    //
    if (originRef.current.value === "") {
      return toast.error("Please enter origin and destination");
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value
        ? destiantionRef.current.value
        : "Space Apartments, Gulshan, Dhaka, Bangladesh",
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
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 pb-5 lg:w-[90%] mx-auto">
      <div className="min-h-28 border-2 card_color p-5 rounded-bl-3xl rounded-tl-3xl">
        <div className="flex flex-col justify-center h-full">
          <div className="shadow-2xl px-4 py-5 rounded-3xl mapContainer">
            <h1 className="text-3xl mb-5 text-center font-semibold">
              Serch Location
            </h1>
            <Autocomplete>
              <input
                type="text"
                name="yourlocation"
                className="block mb-2 p-3 rounded-xl w-full"
                ref={originRef}
              />
            </Autocomplete>
            <Autocomplete>
              <input
                type="text"
                name="destination"
                className=" p-3 rounded-xl w-full"
                ref={destiantionRef}
                placeholder="Space Apartments, Gulshan, Dhaka, Bangladesh"
              />
            </Autocomplete>
            <div
              className="mt-10
"
            >
              <div className="mb-5 flex items-center gap-2">
                <CiLocationOn className="text-6xl text-red-700" />
                <p className="text-xl font-bold italic">
                  Total Distance: {distance || "00 km"}
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <CiTimer className="text-6xl text-green-700" />
                <p className="text-xl font-bold italic">
                  Total Duration: {duration || "00 min"}
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <button
                className="w-[40%] py-2 rounded-2xl tracking-widest active:scale-95 transition-all duration-300 btnColor text-white text-xl "
                onClick={calculateRoute}
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 ">
        <GoogleMap
          mapContainerStyle={{
            height: "70vh",
            width: "100%",
            borderBottomRightRadius: "24px",
            borderTopRightRadius: "24px",
          }}
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
