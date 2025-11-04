import { CardOffer } from "../../models/offers";
import { FavoriteCard } from "./favourite-card";

type FavoritesCityPlacesListProps = {
  cityName: string,
  favoritesCityPlaces : CardOffer[]
}


export function FavoritesCityPlacesList(props : FavoritesCityPlacesListProps): JSX.Element {
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          props.favoritesCityPlaces.map(
            place => <FavoriteCard offer={place}/>
          )
        }
      </div>
    </li>
  );
}
