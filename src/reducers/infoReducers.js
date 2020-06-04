/* eslint-disable */
import { CHANGE_NAME } from '../actions/infoActions';

const initialState = {
  name: 'Anton'
};

export function info (state = initialState, action) {
  switch (action.type) {

    case CHANGE_NAME: {
      return {
        ...state,
        name: action.value
      };
    }

    default: {
      return state;
    }
  }
}
