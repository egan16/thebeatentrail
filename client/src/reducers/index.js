import { combineReducers } from 'redux';

import trips from './trips';

//inside here include all individual reducers for application
export default combineReducers({ trips });