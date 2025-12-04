import { createReducer } from '@reduxjs/toolkit';
import { Cities, City, DefaultCities, Paris } from '../models/city';
import { addOffers, changeCity } from './action';
import { CardOffer } from '../models/offers';
import { AuthorizationStatus } from '../const';

export type OffersState = {
  city: City;
  cities: Cities;
  places: CardOffer[];
  isLoadingOffers: boolean;
  authorizationStatus: AuthorizationStatus
}

const intialState: OffersState = {
  city: Paris,
  cities: DefaultCities,
  places: [],
  isLoadingOffers: false,
  authorizationStatus: AuthorizationStatus.Unknown
};


export const reducer = createReducer(intialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(addOffers, (state, action) => {
      state.places = action.payload;
    });
});
