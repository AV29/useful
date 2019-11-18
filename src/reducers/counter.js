/* eslint-disable */
import { INCREMENT_COUNTER, DECREMENT_COUNTER, CHANGE_COUNTER } from '../actions/counterActions';

const initialState = {
  counter: 0,
  logs: [],
};

export function counterManager (state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
        logs: [...state.logs, type]
      };
    }

    case DECREMENT_COUNTER: {
      return {
        ...state, counter: state.counter - 1,
        logs: [...state.logs, type]
      };
    }

    case CHANGE_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.value,
        logs: [...state.logs, type]
      };
    }

    default: {
      return state;
    }
  }
}
