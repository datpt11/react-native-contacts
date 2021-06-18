import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const _combineReducers = combineReducers({
  ...rootReducers,
});

const reducers = persistReducer(persistConfig, _combineReducers);

const middlewares = [thunk];

if (isDev) {
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export {store, persistor};
