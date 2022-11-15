import CardFulInfo from '../../components/card-ful-info/card-ful-info';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

type PropertyPageProps = {
  favoritesCount: number;
  offers: Offers;
  reviews: Reviews;
}

function PropertyPage({ favoritesCount, offers, reviews }: PropertyPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--property">
        <CardFulInfo offers={offers} reviews={reviews}/>
      </main>
    </div>
  );
}

export default PropertyPage;
