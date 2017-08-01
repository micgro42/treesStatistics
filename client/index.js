import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import {Provider, connect}  from 'react-redux';
import store from './store';

import {bindActionCreators} from 'redux';

import * as ActionCreators from './actions/actionCreators';

function mapStateToProps(state) {
    return {
        data: state.data,
        cardStore: state.cardStore,
        selectedCards: state.selectedCards,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators,  dispatch);
}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);


const Main = (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));
