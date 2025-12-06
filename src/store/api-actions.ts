import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../models/state';
import { AxiosInstance } from 'axios';
import { CardOffer } from '../models/offers';
import { APIRoute, AuthorizationStatus } from '../const';
import { addOffers, setAuthStatus, setCurUserEmail, setIsLoadingOffers } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../models/auth-data';
import {UserData} from '../models/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setIsLoadingOffers(true));
    const {data} = await api.get<CardOffer[]>(APIRoute.Offers);
    dispatch(setIsLoadingOffers(false));
    dispatch(addOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {email}} = await api.get(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setCurUserEmail(email))
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
      try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setCurUserEmail(email));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(setCurUserEmail(""));
  },
);
