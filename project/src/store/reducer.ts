import { reviews } from './../mocks/review-mock';
import {createReducer} from '@reduxjs/toolkit';
import { loadOffers, selectCity, setReviews, setSort } from './actoins';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { DEFAULT_CITY, SortType } from '../consts';

const initialState: {
  selectedCity: string;
  offers: Offers;
  reviews: Reviews;
  sort: string;
} = {
  selectedCity: DEFAULT_CITY,
  offers: [],
  reviews,
  sort: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload.selectedCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload.sort;
    });
});

export {reducer};
