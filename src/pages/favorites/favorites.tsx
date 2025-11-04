import { Offer } from "../../models/offer";
import { FavoritesCityPlacesList } from "./favorites-city-places-list";

type FavoritesPageProps = {
  favoriteOffers : Offer[];
}

function GetUniqueCityNames(offers: Offer[]): string[] {
  let names = offers.map(offer => offer.city.name);
  return names.filter((el, ind) => ind === names.indexOf(el)).sort();
}


function FavoritesPage({favoriteOffers} : FavoritesPageProps) : JSX.Element {
  return(
    <body>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  GetUniqueCityNames(favoriteOffers).map(cityName =>
                  <FavoritesCityPlacesList cityName={cityName} favoritesCityPlaces={favoriteOffers.filter(offer => offer.city.name==cityName)}/>)
                }
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    </body>
  );
}

export default FavoritesPage;
