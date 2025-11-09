import React from 'react';
import { CardOffer } from '../../models/offers';
import RentCard from './rent-card';


type OffersProps = {
  offers: CardOffer[];
  setActiveOfferFunc: React.Dispatch<React.SetStateAction<string>>
}


export function RentOfferList({offers, setActiveOfferFunc} : OffersProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <RentCard
            offer={offer}
            onMouseOver={() => setActiveOfferFunc(offer.id)}
            onMouseLeave={() => setActiveOfferFunc('')}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}
