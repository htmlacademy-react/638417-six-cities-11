import { useEffect, useRef } from 'react';
import {Icon, Marker} from 'leaflet';
import { City, Offer} from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { useAppSelector } from '../../hooks';

type MapProps = {
  city: City;
  hoveredPoint: Offer | undefined;
  selectedCity: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, hoveredPoint, selectedCity }:MapProps): JSX.Element {

  const offers = useAppSelector((state) => state.offers); // все города
  const selectedCities = offers.filter((o)=>(o.city.name === selectedCity)); // фильтрует по выбранному городу

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      }, city.location.zoom);
      selectedCities.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        markers.push(marker);
        marker
          .setIcon(
            hoveredPoint !== undefined && offer.id === hoveredPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      return () => {
        if (map) {
          markers.forEach((marker) => map.removeLayer(marker));
        }
      };
    }
  }, [map, selectedCity, hoveredPoint, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
}

export default Map;
