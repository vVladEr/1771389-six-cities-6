import MainPage from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppPops = {
    cardsAmount : number;
}

function App({cardsAmount} : AppPops) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage cardsAmount={cardsAmount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
