import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import {screenshots} from './screenshot.reducer';





const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  screenshots,
  
});

export default rootReducer;
