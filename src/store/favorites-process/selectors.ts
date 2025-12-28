import { State } from "../../models/state";


export const getFavoriteOffers= (state: State) => state.FAVORITES.favoriteOffers;
export const getIsLoadingFavoritesOffers = (state: State) => state.FAVORITES.isLoadingFavoritesOffers;
