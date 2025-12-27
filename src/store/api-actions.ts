import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../models/state';
import { AxiosInstance } from 'axios';
import { CardOffer, Offer } from '../models/offers';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../models/auth-data';
import {UserData} from '../models/user-data';
import { FullUserData } from '../models/full-user-data';
import { setAuthStatus, setCurUserEmail, setCurUserImage } from './user-process/user-process';
import { redirectToRoute } from './action';
import { Reviews } from '../models/review';

export const fetchOffersAction = createAsyncThunk<CardOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CardOffer[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchNearByOffersAction = createAsyncThunk<CardOffer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers-nearby/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<CardOffer[]>(APIRoute.Offers + `/${offerId}/nearby`);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offers + `/${offerId}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers-nearby/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<Reviews>(APIRoute.Comments + `/${offerId}`);
    return data;
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
      const {data: {email, avatarUrl}} = await api.get<FullUserData>(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setCurUserEmail(email));
      dispatch(setCurUserImage(avatarUrl));
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
      const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setCurUserEmail(email));
      dispatch(setCurUserImage(avatarUrl));
      dispatch(redirectToRoute(AppRoute.Root));
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
    dispatch(setCurUserEmail(''));
  },
);
