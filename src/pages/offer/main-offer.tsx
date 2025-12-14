import { Navigate } from 'react-router-dom';
import { CardOffer, Offer } from '../../models/offers';
import { GetPersentsFromRating} from '../../components/rating/rating';
import { ReviewForm } from './review-form';
import { ReviewsList } from '../../components/review/review-list';
import OffersMap from '../../components/offers-map/offers-map';
import { MarkedPlaceLocation } from '../../models/place-location';
import { useSelector } from 'react-redux';
import { getCurCity } from '../../store/offers-process/selectors';

type MainOfferProps = {
  mainOffer: Offer | undefined;
  offersNearBy: CardOffer[];
}


export function MainOffer({mainOffer, offersNearBy}: MainOfferProps) : JSX.Element{
  const currentCity = useSelector(getCurCity);
  if (!mainOffer) {
    return <Navigate to="*"/>;
  }
  return(
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {mainOffer.images.map((imageSrc) => (
            <div className="offer__image-wrapper" key="offer-image">
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
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
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
                mainOffer.goods.map((good) =>
                  (
                    <li className="offer__inside-item" key="good">
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
            <ReviewsList offerId={mainOffer.id}/>
            <ReviewForm />
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <OffersMap city={currentCity} selectedPointId={mainOffer.id} points={offersNearBy.map(
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
    </section>
  );
}
