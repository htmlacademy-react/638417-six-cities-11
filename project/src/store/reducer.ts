import { reviews } from './../mocks/review-mock';
import { offers } from './../mocks/offers-mock';
import {createReducer} from '@reduxjs/toolkit';
import { setOffers, selectCity, setReviews } from './actoins';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

const initialState: {
  selectedCity: string;
  offers: Offers;
  reviews: Reviews;
} = {
  selectedCity: 'Amsterdam',
  offers,
  reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload.selectedCity;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    });
});

export {reducer};
