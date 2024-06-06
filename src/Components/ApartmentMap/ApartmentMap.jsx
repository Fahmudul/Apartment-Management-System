/* eslint-disable react/prop-types */
import { GoogleMap, Marker } from "@react-google-maps/api";


function ApartmentMap({
  center,
  setMap,
  isLoaded,
  DirectionsRenderer,
  directionsResponse,
}) {
  return isLoaded ? (
    <div className="w-[70%]">
      <GoogleMap
        mapContainerStyle={{ height: "70vh", width: "100%" }}
        center={center}
        zoom={15}
        onLoad={(map) => setMap(map)}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
        <DirectionsRenderer diirections={directionsResponse} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default ApartmentMap;
