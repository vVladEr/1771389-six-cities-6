import { createReducer } from '@reduxjs/toolkit';
import { Cities, City, DefaultCities, Paris } from '../models/city';
import { addOffers, changeCity, setAuthStatus, setCurUserEmail, setIsLoadingOffers } from './action';
import { CardOffer } from '../models/offers';
import { AuthorizationStatus } from '../const';

export type OffersState = {
  city: City;
  cities: Cities;
  places: CardOffer[];
  isLoadingOffers: boolean;
  authorizationStatus: AuthorizationStatus;
  curUserName: string
}

const intialState: OffersState = {
  city: Paris,
  cities: DefaultCities,
  places: [],
  isLoadingOffers: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  curUserName: ""
};


export const reducer = createReducer(intialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(addOffers, (state, action) => {
      state.places = action.payload;
    })
    .addCase(setIsLoadingOffers, (state, action) => {
      state.isLoadingOffers = action.payload
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload
    })
    .addCase(setCurUserEmail, (state, action) => {
      state.curUserName = action.payload
    });
});
