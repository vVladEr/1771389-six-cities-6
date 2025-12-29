import { Fragment } from 'react';
import { City, Cities } from '../../types/city';

type citiesListProps = {
  currentCity: City;
  cities: Cities;
  onCityChange: (city: City) => void;
}

export function CitiesList({currentCity, cities, onCityChange} : citiesListProps) : JSX.Element{
  return(
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.name}>
                <a className={`locations__item-link tabs__item${city === currentCity ? 'tabs__item tabs__item--active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onCityChange(city);
                  } }
                >
                  <span>{city.name}</span>
                </a>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}
