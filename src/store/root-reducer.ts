import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';
import { NameSpaces } from '../const';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';

export const rootReducer = combineReducers({
  [NameSpaces.Offers]: offersProcess.reducer,
  [NameSpaces.User]: userProcess.reducer,
  [NameSpaces.Offer]: offerProcess.reducer,
});
