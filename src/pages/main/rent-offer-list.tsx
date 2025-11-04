import React from "react";
import { CardOffer } from "../../models/offers";
import RentCard from "./rent-card";


type OffersProps = {
  offers: CardOffer[];
}


export function RentOfferList({offers} : OffersProps): JSX.Element {
  const [activeOfferId, setActiveOffer] = React.useState("");
  return(
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(offer => <RentCard
          offer={offer}
          onMouseOver={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer("")}/>)
      }
    </div>
  );
}
