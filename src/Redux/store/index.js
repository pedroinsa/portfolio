import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export default store;