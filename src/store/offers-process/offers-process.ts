import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import {City, DefaultCities, Paris } from '../../models/city';
import { fetchOffersAction } from '../api-actions';
import { OffersState } from '../../models/state';


const initialState: OffersState = {
  city: Paris,
  cities: DefaultCities,
  places: [],
  isLoadingOffers: false,
};

export const offersProcess = createSlice({
  name: NameSpaces.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder){
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isLoadingOffers = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.isLoadingOffers = false;
      state.places = action.payload;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isLoadingOffers = false;
      state.places = [];
    });
  }
}
);

export const {changeCity} = offersProcess.actions;
