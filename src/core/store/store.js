import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { customersReducer } from "../reducers/customers-reducer";
import { vehiclesReducer } from "../reducers/vehicles-reducer";


const rootReducer = combineReducers({
    customersReducer,
    vehiclesReducer
  })

  const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// console.log(store.getState())