import { combineReducers } from 'redux';

import selectedCards from './selectedCards';
import data from './data';
import cardStore from './cardStore';

const rootReducer = combineReducers({selectedCards, data, cardStore});

export default rootReducer;