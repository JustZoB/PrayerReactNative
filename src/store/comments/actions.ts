import { Comment } from '../../services/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const getCommentsStart = createAction<Comment[]>(types.GET_COMMENTS)
export const addCommentStart = createAction<Comment>(types.POST_COMMENT)
