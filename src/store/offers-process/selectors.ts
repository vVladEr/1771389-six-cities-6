import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { City } from '../../models/city';
import { CardOffer } from '../../models/offers';
import { State } from '../../models/state';

export const getCurCity = (state: State): City => state.OFFERS.city;
export const getAllCities = (state: State): City[] => state[NameSpaces.Offers].cities;
export const getOffers = (state: State): CardOffer[] => state[NameSpaces.Offers].places;
export const getOffersByCity = createSelector(
  [getOffers, getCurCity],
  (offers, curCity) => offers.filter((offer) => offer.city.name === curCity.name)
);
export const getIsLoading = (state: State): boolean => state[NameSpaces.Offers].isLoadingOffers;
