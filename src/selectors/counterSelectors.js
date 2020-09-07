/* eslint-disable no-console */
import { createSelector } from 'reselect';

export const getLogs = state => state.counterManager.logs;

export const selectLogs = createSelector(getLogs, (logs) => {
  console.log('Calculating Logs');
  return logs
    .filter(log => !log.includes('CHANGE'))
    .map((log, index) => `${index + 1}. ${log}`);
});

export const getCounterManager = state => state.counterManager;

export const getCounter = (state) => {
  console.log('Get counter');
  return state.counterManager.counter;
};

export const getCounterStep = (state) => {
  console.log('Get counterStep');
  return state.counterManager.counterStep;
};

export const selectCounter = createSelector(
  [getCounterManager],
  (counterManager) => {
    console.log('Get counter');
    return counterManager.counter;
  }
);

export const selectCounterStep = createSelector(
  [getCounterManager],
  (counterManager) => {
    console.log('Get counterStep');
    return counterManager.counterStep;
  }
);
