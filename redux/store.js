import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

  const logger = store => next => action => {
    // console.group(action.type);
    // console.info("dispatching", action);
    const result = next(action);
    // console.log("next state", store.getState());
    // console.groupEnd(action.type);
    // console.log("hello");

    return result;
  };


export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
