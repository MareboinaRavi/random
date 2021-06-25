import { createStore } from "redux";
import { logger } from "redux-logger";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import contactsReducer from "./reducers/contacts";

const store = createStore(
  contactsReducer,
  compose(applyMiddleware(thunk, logger))
);

export default store;
