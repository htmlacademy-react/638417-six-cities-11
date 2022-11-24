import { offers } from './../mocks/offers-mock';
import {createReducer} from '@reduxjs/toolkit';
import { setOffers, selectCity } from './actoins';
import { Offers } from '../types/offer';

const initialState: {
  city: string;
  offers: Offers;
} = {
  city: 'Paris',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
