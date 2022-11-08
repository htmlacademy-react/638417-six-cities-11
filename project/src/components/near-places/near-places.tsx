import { Offers } from '../../types/offer';
import Place from './place/place';

type PropertyNearPlaces = {
  offers: Offers;
}

function NearPlaces({ offers }: PropertyNearPlaces): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <Place key={offer.id} offer={offer}/>)}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
