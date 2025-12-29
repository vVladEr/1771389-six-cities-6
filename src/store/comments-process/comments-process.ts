import { createSlice } from '@reduxjs/toolkit';
import { CommentsState } from '../../types/state';
import { NameSpaces } from '../../const';
import { fetchCommentsAction, sendCommentAction } from '../api-actions';

const initialState : CommentsState = {
  comments: [],
  isSendingComment: false,
  isSendingSuccess: undefined
};

export const commentsProcess = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {
    clearIsSendingSuccess: (state) => {
      state.isSendingSuccess = undefined;
    }
  },
  extraReducers(builder){
    builder.addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
      .addCase(sendCommentAction.pending, (state) => {
        state.isSendingComment = true;
        state.isSendingSuccess = undefined;
      })
      .addCase(sendCommentAction.fulfilled, (state) => {
        state.isSendingSuccess = true;
        state.isSendingComment = false;

      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.isSendingSuccess = false;
        state.isSendingComment = false;
      });
  }
}
);

export const {clearIsSendingSuccess} = commentsProcess.actions;
