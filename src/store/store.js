import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";

 

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(AuthReducer, composeEnhancers(middleware));
