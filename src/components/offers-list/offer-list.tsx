import { CardType, getCardListClassName } from '../../models/card-types';
import { CardOffer } from '../../models/offers';
import { OfferCard } from '../offer-card/offer-card';


type OffersProps = {
  offers: CardOffer[];
  setActiveOfferFunc: (offerId: string) => void;
  cardType: CardType;
}


export function OfferList({offers, setActiveOfferFunc, cardType} : OffersProps): JSX.Element {
  return(
    <div className={getCardListClassName(cardType)}>
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            onMouseOver={() => setActiveOfferFunc(offer.id)}
            onMouseLeave={() => setActiveOfferFunc('')}
            cardType={cardType}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}
