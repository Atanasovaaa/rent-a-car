import { CLEAR_SELECTED_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, GET_ALL_CUSTOMERS, GET_CUSTOMER_BY_ID, LOGIN_CUSTOMER, SAVE_CUSTOMER } from "../action-types/customer-action-types"
import { deleteCustomer, getAllCustomers, getCustomerById, saveCustomer } from "../services/CustomerService"

export function getAllCustomersFromAPI() {
    return dispatch => {
        getAllCustomers().then(customers => {
            dispatch({
                type: GET_ALL_CUSTOMERS,
                payload: customers
            })
        })
    }
}

export function deleteCustomerFromAPI(id) {
    return dispatch => {
        deleteCustomer(id).then(_ => {
            dispatch({
                type: DELETE_CUSTOMER,
                payload: id
            })
        })
    }
}

export function saveCustomerInAPI(customerData) {
    return dispatch => {
        saveCustomer(customerData).then(_ => {
            dispatch({
                type: SAVE_CUSTOMER,
                payload: customerData
            })
        })
    }
}

export function getCustomerByIdFromAPI(id) {
    return dispatch => {
        getCustomerById(id).then(customer => {
            dispatch({
                type: GET_CUSTOMER_BY_ID,
                payload: customer.data
            })
        })
    }
}

export function editCustomer(customerData) {
    return dispatch => {
        dispatch({
            type: EDIT_CUSTOMER,
            payload: customerData
        })
    }
}

export function clearSelectedCustomer() {
    return dispatch => {
        dispatch({
            type: CLEAR_SELECTED_CUSTOMER,
            payload: {}
        })
    }
}

export function setLoggedCustomer(payload){
    return dispatch =>{
        dispatch({
            type: LOGIN_CUSTOMER,
            payload: payload
        });
    }
}