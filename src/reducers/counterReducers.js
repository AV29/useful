/* eslint-disable */
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CHANGE_COUNTER_BY,
  CHANGE_COUNTER_STEP
} from '../actions/counterActions';

const initialState = {
  counter: 0,
  counterStep: 0,
  logs: []
};

export function counterManager (state = initialState, action) {
  switch (action.type) {

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
        logs: [...state.logs, action.type]
      };
    }

    case DECREMENT_COUNTER: {
      return {
        ...state, counter: state.counter - 1,
        logs: [...state.logs, action.type]
      };
    }

    case CHANGE_COUNTER_BY: {
      return {
        ...state,
        counter: state.counter + Number(state.counterStep),
        logs: [...state.logs, action.type]
      };
    }

    case CHANGE_COUNTER_STEP: {
      return {
        ...state,
        counterStep: action.value,
        logs: [...state.logs, action.type]
      };
    }

    default: {
      return state;
    }
  }
}
