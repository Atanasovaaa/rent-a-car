import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { customersReducer } from "../reducers/customers-reducer";

export const store = createStore(customersReducer, applyMiddleware(thunk));