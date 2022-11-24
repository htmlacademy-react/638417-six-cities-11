import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import Gallery from './gallery/gallery';
import Info from './info/info';

type OfferItemParams = {
  id: string;
}

function CardFulInfo(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.selectedCity); // выбранный город
  const offers = useAppSelector((state) => state.offers); // все города
  const selectedCities = offers.filter((o)=>(o.city.name === selectedCity)); // фильтрует по выбранному городу

  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const { id } = params;
  const numberId = parseInt(id, 10);
  const offer = offers.find((o) => o.id === numberId) as Offer;

  return (
    <>
      <section className="property">
        <Gallery images={offer.images} type={offer.type} />
        <Info offer={offer}/>
      </section>
      <section className="property__map map">
        <Map city={offers[0].city} selectedCity={selectedCity} hoveredPoint={undefined}/>
      </section>
      <NearPlaces offers={selectedCities} />
    </>
  );
}

export default CardFulInfo;
