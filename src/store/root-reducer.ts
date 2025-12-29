import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';
import { NameSpaces } from '../const';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';
import { favoritesProcess } from './favorites-process/favorites-process';
import { commentsProcess } from './comments-process/comments-process';

export const rootReducer = combineReducers({
  [NameSpaces.Offers]: offersProcess.reducer,
  [NameSpaces.User]: userProcess.reducer,
  [NameSpaces.Offer]: offerProcess.reducer,
  [NameSpaces.Favorites]: favoritesProcess.reducer,
  [NameSpaces.Comments]: commentsProcess.reducer,
});
