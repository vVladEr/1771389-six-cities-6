import { State } from "../../models/state";

export const getOffer = (state: State) => state.OFFER.offer;
export const getOffersNearBy = (state: State) => state.OFFER.nearByOffers;
export const getComments = (state: State) => state.OFFER.comments;
export const getIsLoadingOffer = (state: State) => state.OFFER.isLoadingOffer;
