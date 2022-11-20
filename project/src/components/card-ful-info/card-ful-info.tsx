import { useParams } from 'react-router-dom';
import { Offer, Offers } from '../../types/offer';
import { Reviews } from '../../types/review';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import Gallery from './gallery/gallery';
import Info from './info/info';

type CardFulInfoProps = {
  offers: Offers;
  reviews: Reviews;
}

type OfferItemParams = {
  id: string;
}

function CardFulInfo({ offers, reviews }: CardFulInfoProps): JSX.Element {

  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const { id } = params;
  const numberId = parseInt(id, 10);
  const offer = offers.find((o) => o.id === numberId) as Offer;
  const curentCity = offer.city.name;

  const nearPlaces = offers.filter((o) => o.city.name === curentCity);

  return (
    <>
      <section className="property">
        <Gallery images={offer.images} type={offer.type} />
        <Info offer={offer} reviews={reviews}/>
      </section>
      <section className="property__map map">
        <Map city={offers[0].city} offers={nearPlaces} selectedPoint={undefined}/>
      </section>
      <NearPlaces offers={nearPlaces} />
    </>
  );
}

export default CardFulInfo;
