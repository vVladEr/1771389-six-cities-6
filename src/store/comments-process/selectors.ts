import { State } from '../../types/state';

export const getComments = (state: State) => state.COMMENTS.comments;
export const getIsSendingComment = (state: State) => state.COMMENTS.isSendingComment;
export const getIsSendingSuccess = (state: State) => state.COMMENTS.isSendingSuccess;
