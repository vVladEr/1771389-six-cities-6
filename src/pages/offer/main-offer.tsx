import { Navigate } from 'react-router-dom';
import { FullOffer } from '../../models/offers';
import { GetPersentsFromRating} from '../../components/rating/rating';
import { ReviewForm } from './review-form';

type MainOfferProps = {
  mainOffer: FullOffer | undefined;
}


export function MainOffer({mainOffer}: MainOfferProps) : JSX.Element{
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
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                  </div>
                  <span className="reviews__user-name">
                    Max
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                </div>
              </li>
            </ul>
            <ReviewForm />
          </section>
        </div>
      </div>
      <section className="offer__map map"></section>
    </section>
  );
}
