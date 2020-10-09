import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { navigation } from './navigation';

const reducers = combineReducers({
  navigation,
});

const storeCreator = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState = {}) {
  return storeCreator(reducers, initialState);
}
