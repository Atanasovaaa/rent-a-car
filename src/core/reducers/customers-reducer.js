import { CLEAR_SELECTED_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, GET_ALL_CUSTOMERS, GET_CUSTOMER_BY_ID, SAVE_CUSTOMER, LOGIN_CUSTOMER} from "../action-types/customer-action-types";

const initalState = {
    customers: [],
    customer: {},
    isCustomerLoggedIn: false
}

export function customersReducer(state = initalState, action) {
    switch(action.type) {
        case GET_ALL_CUSTOMERS:
            return { ...state, customers: action.payload };    
        case DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };    
        case GET_CUSTOMER_BY_ID:
            return { ...state, customer: action.payload }
        case EDIT_CUSTOMER:
            return { ...state, customer: { ...state.customer, ...action.payload } }
        case SAVE_CUSTOMER:
            return { ...state, customers: [...state.customers.filter(c => c.id !== action.payload.id ), action.payload], customer: {} }
        case CLEAR_SELECTED_CUSTOMER:
            return { ...state, customer: action.payload }
        case LOGIN_CUSTOMER:
            return {...state,isCustomerLoggedIn: action.payload}
        default:
            return state;
    }
}