/* eslint-disable */

export const PREFIX = 'COUNTER_MANAGER/';

export const INCREMENT_COUNTER = `${PREFIX}INCREMENT_COUNTER`;
export const DECREMENT_COUNTER = `${PREFIX}DECREMENT_COUNTER`;
export const CHANGE_COUNTER_BY = `${PREFIX}CHANGE_COUNTER_BY`;
export const CHANGE_COUNTER_STEP = `${PREFIX}CHANGE_COUNTER_STEP`;

export const incrementCounter = () => ({ type: INCREMENT_COUNTER });

export const decrementCounter = () => ({ type: DECREMENT_COUNTER });

export const changeCounterBy = () => ({ type: CHANGE_COUNTER_BY });

export const changeCounterStep = value => ({ type: CHANGE_COUNTER_STEP, value });
