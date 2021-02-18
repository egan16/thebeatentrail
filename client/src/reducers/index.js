import { combineReducers } from 'redux';

import trips from './trips';
import auth from './auth';

//inside here include all individual reducers for application
export default combineReducers({ trips, auth });