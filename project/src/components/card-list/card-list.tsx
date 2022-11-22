import { Offers } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  onOfferListItemMouseOver: (offerId: number) => void;
  onOfferListItemMouseOut: () => void;
}

function CardList({ offers, onOfferListItemMouseOver, onOfferListItemMouseOut }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card key={offer.id} offer={offer} onMouseOverHandler={() => onOfferListItemMouseOver(offer.id)} onMouseOutHandler={onOfferListItemMouseOut}/>)
      }
    </div>
  );
}

export default CardList;
