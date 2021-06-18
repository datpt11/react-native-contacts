/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavContainer from './src/navigations';
import {persistor, store} from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <AppNavContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
