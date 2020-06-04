import { info } from './infoReducers';
import { counterManager } from './counterReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  info,
  counterManager
});

export default rootReducer;
