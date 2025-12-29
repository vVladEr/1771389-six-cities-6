import { State } from '../../types/state';

export const getOffer = (state: State) => state.OFFER.offer;
export const getOffersNearBy = (state: State) => state.OFFER.nearByOffers;
export const getIsLoadingOffer = (state: State) => state.OFFER.isLoadingOffer;
export const getIfOfferFound = (state: State) => state.OFFER.isOfferFound;
