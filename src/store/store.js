import { legacy_createStore as createStore, compose } from "redux";
import reducer from "./reducers";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
   : compose;

const configureStores = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhancers(),
);

const store = configureStores({});

export default store;