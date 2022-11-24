import { Offers } from '../../types/offer';
import Card from '../card/card';

type PropertyNearPlaces = {
  nearPlaces: Offers | undefined;
}

function NearPlaces({ nearPlaces }: PropertyNearPlaces): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearPlaces && nearPlaces.map((np) => <Card key={np.id} offer={np} onMouseOverHandler={()=>null} onMouseOutHandler={()=>null} />)}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
