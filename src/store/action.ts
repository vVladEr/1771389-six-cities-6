import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/city';


export const changeCity = createAction<City>('city/change');

export const addPlaces = createAction('places/add');
