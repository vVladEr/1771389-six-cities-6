import { Header } from '../../components/header/header';
import { City } from '../../types/city';
import { CitiesList } from '../../components/main-cities-list/main-cities-list';
import { getAllCities, getCurCity, getOffersByCity } from '../../store/offers-process/selectors';
import { changeCity } from '../../store/offers-process/offers-process';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainOffersContainerEmpty } from '../../components/main-offer-containers/main-offers-container-empty/main-offers-container-empty';
import { MainOffersContainerFull } from '../../components/main-offer-containers/main-offers-container-full/main-offers-container-full';


function MainPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurCity);
  const cities = useAppSelector(getAllCities);
  const filteredOffers = useAppSelector(getOffersByCity);

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${filteredOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <CitiesList currentCity={currentCity} cities={cities} onCityChange={handleCityChange} />
        <div className="cities">
          {
            filteredOffers.length === 0 && <MainOffersContainerEmpty currentCity={currentCity}/>
          }
          {
            filteredOffers.length > 0 && <MainOffersContainerFull filteredOffers={filteredOffers} currentCity={currentCity}/>
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
