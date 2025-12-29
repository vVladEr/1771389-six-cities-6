import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { CardOffer, Offer } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import {UserData} from '../types/user-data';
import { FullUserData } from '../types/full-user-data';
import { setAuthStatus, setCurUserEmail, setCurUserImage } from './user-process/user-process';
import { redirectToRoute } from './action';
import { Review, Reviews } from '../types/review';
import { ReviewFormData } from '../types/review-form-data';
import { UpdateFavoriteData } from '../types/update-favorite-data';

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
  'offersNearby/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<CardOffer[]>(`${APIRoute.Offers }/${offerId}/nearby`);
    return data.splice(0, 3);
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers }/${offerId}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetch',
  async(offerId, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments }/${offerId}`);
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<void, ReviewFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/send',
  async({offerId, comment, rating}, {dispatch, extra: api}) => {
    const parsedRating : number = Number(rating);
    await api.post<Review>(`${APIRoute.Comments }/${offerId}`, {comment, rating: parsedRating});
    dispatch(fetchCommentsAction(offerId));
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


export const fetchFavoritesAction = createAsyncThunk<CardOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetch',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CardOffer[]>(`${APIRoute.Favorites}`);
    return data;
  }
);

export const updateFavoriteAction = createAsyncThunk<void, UpdateFavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/update',
  async({offerId, isFavorite}, {extra: api, dispatch}) => {
    await api.post(`${APIRoute.Favorites}/${offerId}/${ isFavorite ? 1 : 0}`);
    dispatch(fetchFavoritesAction());
  }
);
