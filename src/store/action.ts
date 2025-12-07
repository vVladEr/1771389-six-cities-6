import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/city';
import { CardOffer } from '../models/offers';
import { AppRoute, AuthorizationStatus } from '../const';


export const changeCity = createAction<City>('city/change');

export const addOffers = createAction<CardOffer[]>('offers/add');

export const setIsLoadingOffers = createAction<boolean>('offers/loading');

export const setAuthStatus = createAction<AuthorizationStatus>('authorization/status');

export const setCurUserEmail = createAction<string>('user/email');

export const setCurUserImage = createAction<string>('user/image');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
