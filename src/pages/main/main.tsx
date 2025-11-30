import { RentOfferList } from './rent-offer-list';
import { Header } from '../../components/header/header';
import OffersMap from '../../components/offers-map/offers-map';
import { City } from '../../models/city';
import { useState } from 'react';
import { MarkedPlaceLocation } from '../../models/place-location';
import { useDispatch, useSelector } from 'react-redux';
import { allCities, curCity, offersByCity } from '../../store/selectors';
import { CitiesList } from './cities-list';
import { changeCity } from '../../store/action';


function MainPage() : JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector(curCity);
  const cities = useSelector(allCities);
  const filteredOffers = useSelector(offersByCity);

  const [currentOfferId, setActiveOfferId] = useState('');

  const onCityChange = (city: City) => {
    dispatch(changeCity(city));
  };

  return(
    <body>
      <div className="page page--gray page--main">
        <Header/>

        <main className="page__main page__main--index">
          <CitiesList currentCity={currentCity} cities={cities} onCityChange={onCityChange} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {currentCity.name}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                      Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <RentOfferList offers={filteredOffers} setActiveOfferFunc={setActiveOfferId}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <OffersMap city={currentCity} selectedPointId={currentOfferId} points={filteredOffers.map(
                    (offer) => {
                      const loc : MarkedPlaceLocation =
                        {
                          offerId : offer.id,
                          latitude : offer.location.latitude,
                          longitude : offer.location.longitude,
                          zoom : offer.location.zoom
                        };
                      return loc;
                    }
                  )}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default MainPage;
