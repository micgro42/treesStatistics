import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';


// import the root reducer
import rootReducer from './reducers/index';
import data from './data.js';

const defaultState = {
    cardStore: {
        card1: {
            id: 'card1',
            type: 'histo',
            parameter: 'Stammumfg',
        },
        card2: {
            id: 'card2',
            type: 'hist',
            parameter: 'Standalter',
        },
    },
    selectedCards: ['card1', 'card2'],
    data,
};

const store = createStore(rootReducer, defaultState);

export default store;

