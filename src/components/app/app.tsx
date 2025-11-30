import MainPage from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../models/offers';

type AppPops = {
    offers: Offer[];
}

function App({ offers} : AppPops) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offers={offers}/>}
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
              <FavoritesPage favoriteOffers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage fullOffers={offers}/>}
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
