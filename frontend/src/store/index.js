import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  enhancedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);
export { persistor, store };
