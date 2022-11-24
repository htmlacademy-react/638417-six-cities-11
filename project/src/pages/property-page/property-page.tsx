import CardFulInfo from '../../components/card-ful-info/card-ful-info';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { reviews } from '../../mocks/review-mock';
import { Reviews } from '../../types/review';

const reviewsResp: Reviews = reviews; // тут будет запрос на сервер

function PropertyPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesCount: number = offers.filter((o)=>o.isFavorite).length; // количество оффером с влагом isFavorite
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--property">
        <CardFulInfo reviews={reviewsResp}/>
      </main>
    </div>
  );
}

export default PropertyPage;
