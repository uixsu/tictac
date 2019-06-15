import { createStore, compose, applyMiddleware } from 'redux';
import reducer,{initialState} from '../reducers';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger);

const store = createStore(reducer, initialState, composeEnhancers(enhancer));

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

export default store;