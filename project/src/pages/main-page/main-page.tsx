import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sotr';
import { Offer, Offers } from '../../types/offer';

type MainPageProps = {
  favoritesCount: number;
  offers: Offers;
}

function MainPage({ favoritesCount, offers }: MainPageProps,): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined
  );

  const cities = [...new Set(offers.map((o) => o.city.name))];

  const onOfferListItemMouseOver = (offerId: number) => {
    const currentPoint = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentPoint);
  };

  const onOfferListItemMouseOut = () => {
    setSelectedPoint(undefined);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная</title>
      </Helmet>
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((c) => (
                <li key={c} className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>{c}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort/>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers} onOfferListItemMouseOver={onOfferListItemMouseOver} onOfferListItemMouseOut={onOfferListItemMouseOut}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offers[0].city} offers={offers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
