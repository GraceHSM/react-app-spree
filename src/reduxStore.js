import { createStore, combineReducers } from 'redux';

import reducer from './cart/redux';

const store = createStore(
  combineReducers({
    cart: reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
