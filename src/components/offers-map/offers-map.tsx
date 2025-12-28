import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { MarkedPlaceLocations } from '../../types/place-location';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: City;
  points: MarkedPlaceLocations;
  selectedPointId: string | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT
});

function OffersMap(props: MapProps): JSX.Element {
  const {city, points, selectedPointId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPointId !== undefined && point.offerId === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default OffersMap;
