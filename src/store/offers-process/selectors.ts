import { NameSpaces } from '../../const';
import { City } from '../../models/city';
import { CardOffer } from '../../models/offers';
import { State } from '../../models/state';

export const getCurCity = (state: State): City => state[NameSpaces.Offers].city;
export const getAllCities = (state: State): City[] => state[NameSpaces.Offers].cities;
export const getOffers = (state: State): CardOffer[] => state[NameSpaces.Offers].places;
export const getOffersByCity = (state: State): CardOffer[] => state[NameSpaces.Offers].places
  .filter((place) => place.city.name === state[NameSpaces.Offers].city.name);
export const getIsLoading = (state: State): boolean => state[NameSpaces.Offers].isLoadingOffers;
