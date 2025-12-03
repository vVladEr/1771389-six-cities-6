import { createSelector } from '@reduxjs/toolkit';
import { OffersState } from './reducer';

export const curCity = (state: OffersState) => state.city;
export const allCities = (state: OffersState) => state.cities;
export const allPlaces = (state: OffersState) => state.places;
export const isLoadingOffers = (state: OffersState) => state.isLoadingOffers

export const offersByCity = createSelector([allPlaces, curCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city.name));
