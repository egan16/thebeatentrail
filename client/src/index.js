import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// importing its combineReducers
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './App';


//for redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

//connecting to the div with the id root
ReactDOM.render(
    // highlights potential problems in an application by performing checks
    <React.StrictMode>
        {/* store refers to the variable store above */}
        <Provider store={store}>
            {/* create an instance of App class */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
    );