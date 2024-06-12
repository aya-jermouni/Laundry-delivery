import { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const LeafletGeocoder = () => {
  const map = useMap();
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const geocoderControl = L.Control.geocoder({
      defaultMarkGeocode: false,
      geocodingQueryParams: {
        country: "Morocco",
      },
    })
      .on("markgeocode", function (e) {
        if (marker) {
          map.removeLayer(marker);
        }

        const latlng = e.geocode.center;
        const customIcon = L.icon({
          iconUrl: "/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const newMarker = L.marker(latlng, { icon: customIcon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();

        setMarker(newMarker);

        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);

    // Cleanup function to remove the geocoder control when the component is unmounted
    return () => {
      map.removeControl(geocoderControl);
    };
  }, [map, marker]);

  return null;
};

export default LeafletGeocoder;
