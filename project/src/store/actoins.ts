import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import {AuthorizationStatus} from '../consts';

export const loadOffers = createAction<Offers>('data/loadOffers');

export const selectCity = createAction('offers/selectCity',(selectedCity: string) => ({
  payload: {
    selectedCity,
  },
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

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('cities/setError');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');
