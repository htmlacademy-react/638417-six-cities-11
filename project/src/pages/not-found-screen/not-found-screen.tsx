import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';

type NotFoundScreenProp = {
  favoritesCount: number;
}

function NotFoundScreen({ favoritesCount }: NotFoundScreenProp): JSX.Element {
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
