import { Columns } from '../../services/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const getColumnsStart = createAction<Columns[]>(types.GET_COLUMNS)
export const addColumnStart = createAction<{ title: string }>(types.POST_COLUMN)
