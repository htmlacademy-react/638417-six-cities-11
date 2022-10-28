import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../consts';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';

type AppScreenProps = {
  favoritesCount: number;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  return (

    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage favoritesCount={favoritesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage favoritesCount={favoritesCount}/>}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage favoritesCount={favoritesCount}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen favoritesCount={favoritesCount}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
