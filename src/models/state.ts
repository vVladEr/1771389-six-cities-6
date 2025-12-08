import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Cities, City } from './city.js';
import { CardOffer } from './offers.js';

export type OffersState = {
  city: City;
  cities: Cities;
  places: CardOffer[];
  isLoadingOffers: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  curUserName: string;
  userImagePath: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
