import axios from "axios";
import { register } from "./AuthService";

const apiUrl = "http://localhost:3000";

export function getAllCustomers() {
    return axios.get(`${apiUrl}/customers`);
}

export function getCustomerById(id) {
    return axios.get(`${apiUrl}/customers/${id}`);
}

export function saveCustomer(customerData) {
    if(customerData.id) {
        return axios.put(`${apiUrl}/customers/${customerData.id}`, customerData);
    }

    return register(customerData);
}