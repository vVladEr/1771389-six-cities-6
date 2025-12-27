import { createSlice } from "@reduxjs/toolkit";
import { OfferState } from "../../models/state";
import { NameSpaces } from "../../const";
import { fetchCommentsAction, fetchNearByOffersAction, fetchOfferAction } from "../api-actions";

const initialState : OfferState = {
  offer: undefined,
  nearByOffers: [],
  comments: [],
  isLoadingOffer: false
}

export const offerProcess = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchOfferAction.pending, (state) => {
      state.isLoadingOffer = true;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.isLoadingOffer = false;
      state.offer = action.payload
    })
    .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
      state.nearByOffers = action.payload
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.comments = action.payload
    });
  }
}
);
