import { generatePath, Link } from 'react-router-dom';
import { CardOffer } from '../../types/offers';
import { GetPersentsFromRating } from '../rating/rating';
import { AppRoute, BookmarkPrefix } from '../../const';
import { CardType, getCardClassName, getImageSizes, getImageWrapperClassName } from '../../types/card-types';
import { Bookmark } from '../bookmark/bookmark';

type OfferCardProps = {
  offer: CardOffer;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  onBookmarkClick: (offerId: string) => void;
  cardType: CardType;
}

export function OfferCard({offer, onMouseOver, onMouseLeave, onBookmarkClick, cardType}: OfferCardProps): JSX.Element{
  const {width, height} = getImageSizes(cardType);
  return(
    <article className={getCardClassName(cardType)} onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
      {
        offer.isPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
      }
      <div className={getImageWrapperClassName(cardType)}>
        <Link to={generatePath(AppRoute.Offer, { id: String(offer.id) })}>
          <img className="place-card__image" src={ offer.previewImage} width={width} height={height} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark offerId={offer.id} isActive={offer.isFavorite}
            width={18} height={19} bookmarkType={BookmarkPrefix.Card} onBookmarkClick={onBookmarkClick}
          />
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
