import { combineReducers } from 'redux';
import inventory from './inventory';

const inventoryApp = combineReducers({
  inventory,
});

export default inventoryApp;
