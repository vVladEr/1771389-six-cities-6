import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { FavoritesState } from '../../types/state';
import { fetchFavoritesAction } from '../api-actions';

const initialState: FavoritesState = {
  favoriteOffers: [],
  isLoadingFavoritesOffers: true,
};

export const favoritesProcess = createSlice({
  name: NameSpaces.Favorites,
  initialState,
  reducers: {
    switchFavoriteStatusInFavoriteOffer: (state, action: PayloadAction<string>) => {
      const index = state.favoriteOffers.findIndex((offer) => offer.id === action.payload);
      if (index === -1){
        return;
      }
      state.favoriteOffers[index] = {...state.favoriteOffers[index], isFavorite: !state.favoriteOffers[index].isFavorite};
    }
  },
  extraReducers(builder){
    builder.addCase(fetchFavoritesAction.pending, (state) => {
      state.isLoadingFavoritesOffers = true;
    })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isLoadingFavoritesOffers = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoriteOffers = [];
        state.isLoadingFavoritesOffers = false;
      });
  }
}
);

export const {switchFavoriteStatusInFavoriteOffer} = favoritesProcess.actions;
