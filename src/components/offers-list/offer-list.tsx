import { CardOffer } from '../../models/offers';
import { OfferCard } from '../offer-card/offer-card';
import { OffersCardPrefix } from '../../models/card-prefixes';


type OffersProps = {
  offers: CardOffer[];
  setActiveOfferFunc: (offerId: string) => void;
  cardPrefix: OffersCardPrefix;
}


export function OfferList({offers, setActiveOfferFunc, cardPrefix} : OffersProps): JSX.Element {
  return(
    <div className={`${cardPrefix}__places-list places__list ${cardPrefix === OffersCardPrefix.Cities ? 'tabs__content' : ''}`}>
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            onMouseOver={() => setActiveOfferFunc(offer.id)}
            onMouseLeave={() => setActiveOfferFunc('')}
            cardPrefix={cardPrefix}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}
