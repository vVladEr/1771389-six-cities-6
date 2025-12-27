import { generatePath, Link } from 'react-router-dom';
import { CardOffer } from '../../models/offers';
import { GetPersentsFromRating } from '../rating/rating';
import { OffersCardPrefix } from '../../models/card-prefixes';
import { AppRoute } from '../../const';

type OfferCardProps = {
  offer: CardOffer;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  cardPrefix: OffersCardPrefix;
}

export function OfferCard({offer, onMouseOver, onMouseLeave, cardPrefix}: OfferCardProps): JSX.Element{
  return(
    <article className={`${cardPrefix}__card place-card`} onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
      {
        offer.isPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
      }
      <div className={`${cardPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: String(offer.id) })}>
          <img className="place-card__image" src={ offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${GetPersentsFromRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: String(offer.id) })}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
