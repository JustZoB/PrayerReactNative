import { Prayer } from '../../services/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const getPrayersStart = createAction<Prayer[]>(types.GET_PRAYERS)
export const addPrayerStart = createAction<Prayer>(types.POST_PRAYER)
export const checkPrayerStart = createAction<Prayer>(types.CHECK_PRAYER)
