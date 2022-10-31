import { Helmet } from 'react-helmet-async';
import FavoritesLocationItems from '../../components/favorites-location-items/favorites-location-items';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty';

type FavoriteProps = {
  offers: Offers;
};

type CityWhithOffers = {
  name: string;
  offers: Offers;
}

type FavoritePlaces = {
  [key: string]: Offers;
}

function FavoritesPage({ offers }: FavoriteProps): JSX.Element {

  const favoritePlacesArr: CityWhithOffers[] = [];
  const favoritePlacesObj: FavoritePlaces = {};

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  for (let i = 0; i < favoriteOffers.length; i++) {
    const currentOffer = favoriteOffers[i];
    const currentElementName = favoriteOffers[i].city.name;

    if (!favoritePlacesObj[currentElementName]) {
      favoritePlacesObj[currentElementName] = [currentOffer];
    } else {
      favoritePlacesObj[currentElementName].push(currentOffer);
    }
  }

  for (const [key, value] of Object.entries(favoritePlacesObj)) {
    favoritePlacesArr.push({
      name: key,
      offers: value
    });
  }

  if (favoriteOffers.length === 0) {
    return <FavoritesEmptyScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      <Header favoritesCount={offers.length} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesLocationItems favoriteOffers={favoritePlacesArr} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
