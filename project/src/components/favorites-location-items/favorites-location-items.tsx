import { FavoriteOffers } from '../../types/offer';
import Favorite from './favorite/favorite';

type FavoritesLocationItemProps = {
  favoriteOffers: FavoriteOffers;
};

function FavoritesLocationItems({ favoriteOffers }: FavoritesLocationItemProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {favoriteOffers.map((favoriteOffer) => (
        <li key={favoriteOffer.name} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{favoriteOffer.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffer.offers.map((offer) => <Favorite key={offer.id} offer={offer} />)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesLocationItems;
