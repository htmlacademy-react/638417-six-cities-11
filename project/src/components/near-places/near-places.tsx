import { Offers } from '../../types/offer';
import Card from '../card/card';

type PropertyNearPlaces = {
  offers: Offers;
}

function NearPlaces({ offers }: PropertyNearPlaces): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <Card key={offer.id} offer={offer} onMouseOverHandler={()=>null}/>)}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
