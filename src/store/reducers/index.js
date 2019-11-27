import {login} from './login';
import {home} from './home';
import {combineReducers} from 'redux';
export const Reducers = combineReducers({
  login: login,
  home: home,
});
