import { reviews } from './../mocks/review-mock';
import {createReducer} from '@reduxjs/toolkit';
import { loadOffers, requireAuthorization, selectCity, setError, setOffersLoadingStatus, setReviews, setSort } from './actoins';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { AuthorizationStatus, DEFAULT_CITY, SortType } from '../consts';

const initialState: {
  selectedCity: string;
  offers: Offers;
  reviews: Reviews;
  sort: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
} = {
  selectedCity: DEFAULT_CITY,
  offers: [],
  reviews,
  sort: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload.selectedCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload.sort;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
