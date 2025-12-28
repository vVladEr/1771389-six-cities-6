import { AuthorizationStatus, NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state:State) : AuthorizationStatus => state[NameSpaces.User].authorizationStatus;
export const getCurUserEmail = (state:State): string => state[NameSpaces.User].curUserName;
export const getCurUserImage = (state:State): string => state[NameSpaces.User].userImagePath;
