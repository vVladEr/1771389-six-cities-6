import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, NameSpaces } from "../../const";
import { UserProcess } from "../../models/state";

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  curUserName: '',
  userImagePath: ''
}

export const userProcess = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
        state.authorizationStatus = action.payload;
    },
    setCurUserEmail: (state, action) => {
      state.curUserName = action.payload;
    },
    setCurUserImage: (state, action) => {
      state.userImagePath = action.payload;
    },
  }
  }
);

export const {setAuthStatus, setCurUserEmail, setCurUserImage} = userProcess.actions
