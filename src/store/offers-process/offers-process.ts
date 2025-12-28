import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import {City, DefaultCities, Paris } from '../../types/city';
import { fetchOffersAction } from '../api-actions';
import { OffersState } from '../../types/state';


const initialState: OffersState = {
  city: Paris,
  cities: DefaultCities,
  offers: [],
  isLoadingOffers: false,
};

export const offersProcess = createSlice({
  name: NameSpaces.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    switchFavoriteStatusInOffers: (state, action: PayloadAction<string>) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload);
      if (index === -1){
        return;
      }
      state.offers[index] = {...state.offers[index], isFavorite: !state.offers[index].isFavorite};
    }
  },
  extraReducers(builder){
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isLoadingOffers = true;
    })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isLoadingOffers = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingOffers = false;
        state.offers = [];
      });
  }
}
);

export const {switchFavoriteStatusInOffers, changeCity} = offersProcess.actions;
