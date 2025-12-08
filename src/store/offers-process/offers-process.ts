import { createSlice } from "@reduxjs/toolkit";
import { NameSpaces } from "../../const";
import {DefaultCities, Paris } from "../../models/city";
import { fetchOffersAction } from "../api-actions";
import { OffersState } from "../../models/state";



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
    changeCity: (state, action) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder){
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isLoadingOffers = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.isLoadingOffers = true;
      state.places = action.payload;
    })
  }
  }
);
