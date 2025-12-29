import { CardOffer, Offer} from '../../types/offers';
import { GetPersentsFromRating} from '../rating/rating';
import { ReviewsList } from '../review/review-list';
import OffersMap from '../offers-map/offers-map';
import { MarkedPlaceLocation } from '../../types/place-location';
import { getCurCity } from '../../store/offers-process/selectors';
import { Reviews } from '../../types/review';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, BookmarkPrefix, NUMBER_OF_IMAGES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Bookmark } from '../bookmark/bookmark';
import { switchFavoriteStatusInMainOffer } from '../../store/offer-process/offer-process';
import { switchFavoriteStatusInOffers } from '../../store/offers-process/offers-process';
import { ReviewForm } from '../review/review-form';

type MainOfferProps = {
  mainOffer: Offer;
  offersNearBy: CardOffer[];
  comments: Reviews;
}


export function MainOffer({mainOffer, offersNearBy, comments}: MainOfferProps) : JSX.Element{
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurCity);
  const authStatus = useAppSelector(getAuthStatus);

  const handleMainOfferBookmarkClick = () =>{
    dispatch(switchFavoriteStatusInMainOffer());
    dispatch(switchFavoriteStatusInOffers(mainOffer.id));
  };

  const points = offersNearBy.map(
    (offer) => {
      const loc : MarkedPlaceLocation =
              {
                offerId : offer.id,
                latitude : offer.location.latitude,
                longitude : offer.location.longitude,
                zoom : offer.location.zoom
              };
      return loc;
    });
  points.push({
    offerId: mainOffer.id,
    latitude: mainOffer.location.latitude,
    longitude : mainOffer.location.longitude,
    zoom : mainOffer.location.zoom
  });
  const tmpImages = mainOffer.images.slice(0, NUMBER_OF_IMAGES);
  return(
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {tmpImages.map((imageSrc, index) => (
            <div className="offer__image-wrapper" key={`offer-image-${mainOffer.id + index.toString()}`}>
              <img className="offer__image" src={imageSrc} alt="Photo studio" />
            </div>
          )
          )}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {
            mainOffer.isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>
          }

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {mainOffer.title}
            </h1>
            <Bookmark offerId={mainOffer.id} isActive={mainOffer.isFavorite}
              width={31} height={33} bookmarkType={BookmarkPrefix.Offer}
              onBookmarkClick={handleMainOfferBookmarkClick}
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{
                width : `${GetPersentsFromRating(mainOffer.rating)}%`
              }}
              />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{mainOffer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {mainOffer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {mainOffer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {mainOffer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{mainOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {
                mainOffer.goods.map((good, index) =>
                  (
                    <li className="offer__inside-item" key={`good-${mainOffer.id + index.toString()}`}>
                      {good}
                    </li>
                  ))
              }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={mainOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="offer__user-name">
                {mainOffer.host.name}
              </span>
              {
                mainOffer.host.isPro &&
              <span className="offer__user-status">
                Pro
              </span>
              }
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {mainOffer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ReviewsList reviews={comments}/>
            {authStatus === AuthorizationStatus.Auth && <ReviewForm offerId={mainOffer.id}/>}
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <OffersMap city={currentCity} selectedPointId={mainOffer.id} points={points}/>
      </section>
    </section>
  );
}
