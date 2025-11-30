import { createReducer } from "@reduxjs/toolkit";
import { City, Paris } from "../models/city";
import { addPlaces, changeCity } from "./action";
import { FullOffers } from "../mocks/full-offers";
import { Offer } from "../models/offers";

type OffersState = {
  city: City,
  places: Offer[]
}

const intialState: OffersState = {
  city: Paris,
  places: []
}


export const reducer = createReducer(intialState, (builder ) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload
      state.city = city
    })
    .addCase(addPlaces, (state) => {
      state.places = FullOffers
    });
})
