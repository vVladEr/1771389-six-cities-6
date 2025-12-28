import { OfferList } from '../../components/offers-list/offer-list';
import { CardType } from '../../models/card-types';
import { CardOffer } from '../../models/offers';

type FavoritesCityPlacesListProps = {
  cityName: string;
  favoritesCityPlaces : CardOffer[];
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
      <OfferList cardType={CardType.Favorites} offers={props.favoritesCityPlaces} setActiveOfferFunc={() => {}}/>
    </li>
  );
}
