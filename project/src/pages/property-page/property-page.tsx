import CardFulInfo from '../../components/card-ful-info/card-ful-info';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';

type PropertyPageProps = {
  favoritesCount: number;
  offers: Offers;
}

function PropertyPage({ favoritesCount, offers }: PropertyPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--property">
        <CardFulInfo offers={offers} />
      </main>
    </div>
  );
}

export default PropertyPage;
