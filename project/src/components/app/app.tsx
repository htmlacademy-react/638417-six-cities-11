import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { offers } from '../../mocks/offers-mock';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';
import { Offers } from '../../types/offer';
import PrivateRoute from '../private-route/private-route';

const offersResp: Offers = offers; // тут будет запрос на сервер
const favoritesCount: number = offersResp.filter((o)=>o.isFavorite).length; // количество оффером с влагом isFavorite

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage favoritesCount={favoritesCount} offers={offersResp} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage offers={offersResp} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyPage favoritesCount={favoritesCount} offers={offersResp}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen favoritesCount={favoritesCount} />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
