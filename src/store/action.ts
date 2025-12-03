import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/city';
import { CardOffer } from '../models/offers';


export const changeCity = createAction<City>('city/change');

export const addOffers = createAction<CardOffer[]>('offers/add');

export const setIsLoadingOffers = createAction<boolean>('offers/loading')
