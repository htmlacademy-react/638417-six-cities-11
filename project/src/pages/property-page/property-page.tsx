import CardFulInfo from '../../components/card-ful-info/card-ful-info';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function PropertyPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesCount: number = offers.filter((o)=>o.isFavorite).length; // количество оффером с влагом isFavorite
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--property">
        <CardFulInfo />
      </main>
    </div>
  );
}

export default PropertyPage;
