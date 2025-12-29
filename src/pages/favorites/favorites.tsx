import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CardOffer } from '../../types/offers';
import { FavoritesCityPlacesList } from '../../components/favorites-city-places-list/favorites-city-places-list';
import { Header } from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/favorites-process/selectors';


function GetUniqueCityNames(offers: CardOffer[]): string[] {
  const names = offers.map((offer) => offer.city.name);
  return names.filter((el, ind) => ind === names.indexOf(el)).sort();
}


function FavoritesPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return(
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favorites.length > 0 ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    GetUniqueCityNames(favorites).map((cityName) =>
                      (
                        <FavoritesCityPlacesList cityName={cityName} favoritesCityPlaces={favorites.filter((offer) =>
                          offer.city.name === cityName)}
                        key={`${cityName}`}
                        />
                      ))
                  }
                </ul>
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
