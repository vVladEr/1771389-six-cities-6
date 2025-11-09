import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CardOffer } from '../../models/offers';
import { FavoritesCityPlacesList } from './favorites-city-places-list';
import { Header } from '../../components/header/header';

type FavoritesPageProps = {
  favoriteOffers : CardOffer[];
}

function GetUniqueCityNames(offers: CardOffer[]): string[] {
  const names = offers.map((offer) => offer.city.name);
  return names.filter((el, ind) => ind === names.indexOf(el)).sort();
}


function FavoritesPage({favoriteOffers} : FavoritesPageProps) : JSX.Element {
  return(
    <body>
      <div className="page">
         <Header/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  GetUniqueCityNames(favoriteOffers).map((cityName) =>
                    (
                      <FavoritesCityPlacesList cityName={cityName} favoritesCityPlaces={favoriteOffers.filter((offer) =>
                        offer.city.name === cityName)}
                      key={`${cityName}`}
                      />
                    ))
                }
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Root}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </body>
  );
}

export default FavoritesPage;
