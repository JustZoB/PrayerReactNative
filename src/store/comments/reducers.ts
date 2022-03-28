import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../services/axios';

type CommentsState = {
  comments: Comment[] | undefined
  isDataLoaded: boolean
  error: Error | undefined
}

const initialState: CommentsState = {
  comments: undefined as Comment[],
  isDataLoaded: false,
  error: undefined
}

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<{ comments: Comment[], }>) {
      state.comments = action.payload.comments
    },
    changeIsDataLoading(state, action: PayloadAction<{ isDataLoaded: boolean, }>) {
      state.isDataLoaded = action.payload.isDataLoaded
    },
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload)
    },
  },
});

export const {
  setComments,
  changeIsDataLoading,
  addComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
