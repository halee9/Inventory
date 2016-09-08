import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import inventoryApp from './app/reducers';
import Navi from './app/components/Navi.js';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
let store = createStoreWithMiddleware(inventoryApp);

class inventory extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navi />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('inventory', () => inventory);
