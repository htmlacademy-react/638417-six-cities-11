import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type NotFoundScreenProp = {
  favoritesCount: number;
}

function NotFoundScreen({ favoritesCount }: NotFoundScreenProp): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header favoritesCount={favoritesCount} />
      <h1 className="favorites__title">404 Page not found</h1>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
