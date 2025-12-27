import { Header } from '../../components/header/header';
import OffersMap from '../../components/offers-map/offers-map';
import { City } from '../../models/city';
import { useEffect, useState } from 'react';
import { MarkedPlaceLocation } from '../../models/place-location';
import { useDispatch, useSelector } from 'react-redux';
import { CitiesList } from './cities-list';

import { getAllCities, getCurCity, getOffersByCity } from '../../store/offers-process/selectors';
import { changeCity } from '../../store/offers-process/offers-process';
import { OfferList } from '../../components/offers-list/offer-list';
import { SortType } from '../../models/sort-type';
import { CardOffer } from '../../models/offers';
import { CardType } from '../../models/card-types';


function MainPage() : JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurCity);
  const cities = useSelector(getAllCities);
  const filteredOffers = useSelector(getOffersByCity);

  const [currentOfferId, setActiveOfferId] = useState('');
  const [currentSortType, setSortType] = useState(SortType.Popular);
  const [sortedOffers, setSortedOffers] = useState<CardOffer[]>(filteredOffers.slice());
  const [isSortOpen, setIsSortOpen] = useState<boolean>();

  useEffect(() => {
    switch (currentSortType) {
      case SortType.Popular:
        setSortedOffers(filteredOffers.slice());
        break;

      case SortType.PriceHighToLow:
        setSortedOffers(filteredOffers.slice().sort((a, b) => b.price - a.price));
        break;

      case SortType.PriceLowToHigh:
        setSortedOffers(filteredOffers.slice().sort((a, b) => a.price - b.price));
        break;

      case SortType.TopRatedFirst:
        setSortedOffers(filteredOffers.slice().sort((a, b) => b.rating - a.rating));
        break;
    }
  }, [filteredOffers, currentSortType, currentCity]);

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
                <form className="places__sorting" action="#" method="get"
                  onClick={ () => setIsSortOpen(!isSortOpen)}
                >
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    {currentSortType}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${isSortOpen && 'places__options--opened'}`}>
                    {
                      Object.values(SortType).map((sortType) => (
                        <li
                          className={`places__option ${sortType === currentSortType && 'places__option--active'}`}
                          tabIndex={0}
                          onClick={() => {
                            setSortType(sortType);
                            setIsSortOpen(false);
                          }}
                          key={sortType}
                        >
                          {sortType}
                        </li>

                      )
                      )
                    }
                  </ul>
                </form>
                <OfferList offers={sortedOffers} setActiveOfferFunc={setActiveOfferId} cardType={CardType.Cities}/>
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
