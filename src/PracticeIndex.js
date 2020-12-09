import { combineReducers } from 'redux';
import PracticeCounter from './PracticeCounter';
import practiceToos from './PracticeToods';

const rootReducer = combineReducers({
  PracticeCounter,
  practiceToos,
});

export default rootReducer;
