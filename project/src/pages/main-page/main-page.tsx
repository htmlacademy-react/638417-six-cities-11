import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sotr';
import { SortType } from '../../consts';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';

function MainPage(): JSX.Element {
  // STORE
  const selectedCity = useAppSelector((state) => state.selectedCity); // выбранный город
  const offers = useAppSelector((state) => state.offers); // все города
  const sort = useAppSelector((state) => state.sort); // тип сортировки

  // STATE
  const [hoveredPoint, setSelectedPoint] = useState<Offer | undefined>(undefined); // карточна на которую навели курсос для отображения на карте
  const [offersAfterSort, setOffersAfterSort] = useState(offers);

  // CREATE NECESSARY DATA
  const selectedCities = offers.filter((o)=>(o.city.name === selectedCity)); // фильтрует по выбранному городу
  const favoritesCount: number = offers.filter((o)=>o.isFavorite).length; // количество оффером с влагом isFavorite
  const cities = [...new Set(offers.map((o) => o.city.name))]; // все названия городов

  // ON CARD HOVER HANDLERS
  const onOfferListItemMouseOver = (offerId: number) => {
    const currentPoint = offers.find((o) => o.id === offerId);
    setSelectedPoint(currentPoint);
  };

  const onOfferListItemMouseOut = () => {
    setSelectedPoint(undefined);
  };

  // OFFER SORTING
  const getSortedOffers = () => {
    switch (sort) {
      case SortType.PriceLowToHigh: return selectedCities.sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow: return selectedCities.sort((a, b) => b.price - a.price);
      case SortType.TopRatedFirst: return selectedCities.sort((a, b) => b.rating - a.rating);
      default: return selectedCities;
    }
  };

  useEffect(()=>{
    setOffersAfterSort(getSortedOffers());
  },[sort]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная</title>
      </Helmet>
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={cities} selectedCity={selectedCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersAfterSort.length} places to stay in {selectedCity}</b>
              <Sort/>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offersAfterSort} onOfferListItemMouseOver={onOfferListItemMouseOver} onOfferListItemMouseOut={onOfferListItemMouseOut}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offersAfterSort[0].city} hoveredPoint={hoveredPoint} selectedCity={selectedCity}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
