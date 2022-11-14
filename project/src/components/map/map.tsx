import { useEffect, useRef } from 'react';
import {Icon, Marker} from 'leaflet';
import { City, Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';

type MapProps = {
  city: City;
  offers: Offers;
  selectedPoint: Offer | undefined;
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

function Map({city, offers, selectedPoint}:MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
}

export default Map;
