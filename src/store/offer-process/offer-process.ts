import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferState } from '../../types/state';
import { NameSpaces } from '../../const';
import { fetchNearByOffersAction, fetchOfferAction } from '../api-actions';

const initialState : OfferState = {
  offer: null,
  nearByOffers: [],
  isLoadingOffer: true,
  isOfferFound: false
};

export const offerProcess = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {
    switchFavoriteStatusInNearByOffer: (state, action: PayloadAction<string>) => {
      const index = state.nearByOffers.findIndex((offer) => offer.id === action.payload);
      if (index === -1){
        return;
      }
      state.nearByOffers[index] = {...state.nearByOffers[index], isFavorite: !state.nearByOffers[index].isFavorite};
    },
    switchFavoriteStatusInMainOffer: (state) => {
      if (!state.offer){
        return;
      }
      state.offer = {...state.offer, isFavorite: !state.offer.isFavorite};
    }
  },
  extraReducers(builder){
    builder.addCase(fetchOfferAction.pending, (state) => {
      state.isLoadingOffer = true;
      state.isOfferFound = false;
      state.offer = null;
    })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferFound = true;
        state.isLoadingOffer = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferFound = false;
        state.isLoadingOffer = false;
        state.offer = null;
      })
      .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
      });
  }
}
);

export const {switchFavoriteStatusInNearByOffer, switchFavoriteStatusInMainOffer} = offerProcess.actions;
