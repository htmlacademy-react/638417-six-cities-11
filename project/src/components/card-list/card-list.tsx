import { Offers } from '../../types/offer';
import Card from './card/card';

type CardListProps = {
  offers: Offers;
  onOfferListItemHover: (offerId: number) => void;
}

function CardList({ offers, onOfferListItemHover }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card key={offer.id} offer={offer} onMouseOverHandler={() => onOfferListItemHover(offer.id)} />)
      }
    </div>
  );
}

export default CardList;
