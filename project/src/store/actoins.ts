import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const selectCity = createAction('offers/selectCity',(selectedCity: string) => ({
  payload: {
    selectedCity,
  },
}));

export const setOffers = createAction('offers/setOffers', (offers: Offers)=>({
  payload:{
    offers,
  }
}));

export const setReviews = createAction('reviews/setReviews', (reviews: Reviews)=>({
  payload:{
    reviews,
  }
}));

export const setSort = createAction('offers/setSort', (sort: string)=>({
  payload:{
    sort,
  }
}));
