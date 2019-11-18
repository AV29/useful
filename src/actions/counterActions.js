/* eslint-disable */
import { counterManager } from '../reducers/counter';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';

export const incrementCounter = { type: INCREMENT_COUNTER };

export const decrementCounter = { type: DECREMENT_COUNTER };

const userLoadingSuccess = user => {
  return { type: 'USER_LOADED', user };
};
