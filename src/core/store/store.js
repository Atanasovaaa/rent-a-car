import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { customersReducer } from "../reducers/customers-reducer";
import { vehiclesReducer } from "../reducers/vehicles-reducer";


const rootReducer = combineReducers({
    customersReducer,
    vehiclesReducer
  })

export const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState())