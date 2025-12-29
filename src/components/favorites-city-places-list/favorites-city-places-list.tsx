import { OfferList } from '../offers-list/offer-list';
import { useAppDispatch } from '../../hooks';
import { CardType } from '../../types/card-types';
import { CardOffer } from '../../types/offers';
import { switchFavoriteStatusInFavoriteOffer } from '../../store/favorites-process/favorites-process';
import { switchFavoriteStatusInOffers } from '../../store/offers-process/offers-process';

type FavoritesCityPlacesListProps = {
  cityName: string;
  favoritesCityPlaces : CardOffer[];
}


export function FavoritesCityPlacesList(props : FavoritesCityPlacesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleBookmarkClick = (offerId: string) => {
    dispatch(switchFavoriteStatusInFavoriteOffer(offerId));
    dispatch(switchFavoriteStatusInOffers(offerId));
  };


  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.cityName}</span>
          </a>
        </div>
      </div>
      <OfferList cardType={CardType.Favorites} offers={props.favoritesCityPlaces} setActiveOfferFunc={() => {}}
        onBookmarkClick={handleBookmarkClick}
      />
    </li>
  );
}
