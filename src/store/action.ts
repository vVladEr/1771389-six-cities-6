import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/city';
import { CardOffer } from '../models/offers';
import { AuthorizationStatus } from '../const';


export const changeCity = createAction<City>('city/change');

export const addOffers = createAction<CardOffer[]>('offers/add');

export const setIsLoadingOffers = createAction<boolean>('offers/loading');

export const setAuthStatus = createAction<AuthorizationStatus>('authorization/status')
