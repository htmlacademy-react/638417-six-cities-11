import { offers } from './../mocks/offers-mock';
import {createReducer} from '@reduxjs/toolkit';
import { setOffers, selectCity } from './actoins';
import { Offers } from '../types/offer';

const initialState: {
  selectedCity: string;
  offers: Offers;
} = {
  selectedCity: 'Amsterdam',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload.selectedCity;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
