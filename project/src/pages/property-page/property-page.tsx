import CardFulInfo from '../../components/card-ful-info/card-ful-info';
import Header from '../../components/header/header';
import { reviews } from '../../mocks/review-mock';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

type PropertyPageProps = {
  favoritesCount: number;
  offers: Offers;
}

const reviewsResp: Reviews = reviews; // тут будет запрос на сервер

function PropertyPage({ favoritesCount, offers}: PropertyPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--property">
        <CardFulInfo offers={offers} reviews={reviewsResp}/>
      </main>
    </div>
  );
}

export default PropertyPage;
