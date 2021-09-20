import axios from "axios";
import { register } from "./AuthService";

const apiUrl = "http://localhost:3000";

export function getAllCustomers() {
    return axios({
        url: `${apiUrl}/customers`,
        method: 'get',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
        .then(res => res.data)
        .catch(error => Promise.reject(error));
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

export function deleteCustomer(id) {
    return axios.delete(`${apiUrl}/customers/${id}`);
}