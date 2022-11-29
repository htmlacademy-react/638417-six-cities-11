import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';


function NotFoundScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesCount: number = offers.filter((o)=>o.isFavorite).length; // количество оффером с влагом isFavorite
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <Header favoritesCount={favoritesCount} />
      <h1 className="favorites__title">404 Page not found</h1>
    </div>
  );
}

export default NotFoundScreen;
