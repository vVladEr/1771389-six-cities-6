import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../models/state";
import { AxiosInstance } from "axios";
import { CardOffer } from "../models/offers";
import { APIRoute } from "../const";
import { addOffers } from "./action";

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ``,
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<CardOffer[]>(APIRoute.Offers)
    dispatch(addOffers(data))
  }
)
