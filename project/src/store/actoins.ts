import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const selectCity = createAction('offets/selectCity',(selectedCity: string) => ({
  payload: {
    selectedCity,
  },
}));

export const setOffers = createAction('offets/setOffers', (offers: Offers)=>({
  payload:{
    offers,
  }
}));
