import { createReducer } from "@reduxjs/toolkit";
import { Cities, City, DefaultCities, Paris } from "../models/city";
import { addPlaces, changeCity } from "./action";
import { FullOffers } from "../mocks/full-offers";
import { Offer } from "../models/offers";

export type OffersState = {
  city: City,
  cities: Cities
  places: Offer[],
}

const intialState: OffersState = {
  city: Paris,
  cities: DefaultCities,
  places: FullOffers
}


export const reducer = createReducer(intialState, (builder ) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload
    })
    .addCase(addPlaces, (state) => {
      state.places = FullOffers
    });
})
