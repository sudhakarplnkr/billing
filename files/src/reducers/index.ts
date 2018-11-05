import { combineReducers } from 'redux';
import dashboard from './DashboardReducer';

export default combineReducers({
  data: dashboard
});
