import React from "react";
import { Offer } from "../../models/offer";
import RentCard from "./rent-card";


type OffersProps = {
  offers: Offer[];
}


export function RentOfferList({offers} : OffersProps): JSX.Element {
  const [activeOffer, setActiveOffer] = React.useState("");
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
