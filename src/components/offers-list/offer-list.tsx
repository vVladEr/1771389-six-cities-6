import { CardType, getCardListClassName } from '../../types/card-types';
import { CardOffer } from '../../types/offers';
import { OfferCard } from '../offer-card/offer-card';


type OffersProps = {
  offers: CardOffer[];
  setActiveOfferFunc: (offerId: string) => void;
  onBookmarkClick: (offerId: string) => void;
  cardType: CardType;
}


export function OfferList({offers, setActiveOfferFunc, onBookmarkClick, cardType} : OffersProps): JSX.Element {
  return(
    <div className={getCardListClassName(cardType)}>
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            onMouseOver={() => setActiveOfferFunc(offer.id)}
            onMouseLeave={() => setActiveOfferFunc('')}
            cardType={cardType}
            onBookmarkClick={onBookmarkClick}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}
