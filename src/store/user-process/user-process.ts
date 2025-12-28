import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpaces } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  curUserName: '',
  userImagePath: ''
};

export const userProcess = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setCurUserEmail: (state, action: PayloadAction<string>) => {
      state.curUserName = action.payload;
    },
    setCurUserImage: (state, action: PayloadAction<string>) => {
      state.userImagePath = action.payload;
    },
  }
}
);

export const {setAuthStatus, setCurUserEmail, setCurUserImage} = userProcess.actions;
