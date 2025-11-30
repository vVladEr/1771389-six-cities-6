import { createAction } from "@reduxjs/toolkit";
import { City } from "../models/city";
import { CardOffer } from "../models/offers";



export const changeCity = createAction<{city: City}>("city/change");

export const addPlaces = createAction<{places: CardOffer[]}>("places/add");
