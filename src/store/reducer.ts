import { createReducer } from "@reduxjs/toolkit";
import { Amsterdam } from "../models/city";
import { changeCity } from "./action";



const intialState = {
  city: Amsterdam,
  places: []
}


export const reducer = createReducer(intialState, (builder ) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload
      state.city = city
    });
})
