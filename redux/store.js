import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "../redux/reducer";

//customize redux-logger options
const logger = createLogger({
  duration: true,
  timestamp: true, 
  diff: true
});

const middlewares = applyMiddleware(thunk, logger);

const makeStore = (initialState, options) => {
  createStore(reducer, initialState, middlewares);
};

export default makeStore;
