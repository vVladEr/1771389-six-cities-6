import { City } from '../../../types/city';

type MainOffersContainerEmptyProps = {
  currentCity: City;
}


export function MainOffersContainerEmpty({currentCity}: MainOffersContainerEmptyProps) : JSX.Element {

  return(
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">{`We could not find any property available at the moment in ${currentCity.name}`}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
