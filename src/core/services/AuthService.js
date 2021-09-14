import axios from "axios";
import { getAllCustomers } from "./CustomerService";

const apiUrl = "http://localhost:3000";

export function getLoggedCustomer() {
    return JSON.parse(localStorage.getItem("loggedCustomer"));
}

export async function login(customerData) {
    const customers = await (await getAllCustomers()).data;

    const loggedCustomer = customers.find(
        (c) => 
            c.email === customerData.email && c.password.toString() === customerData.password
    );

    if(loggedCustomer) {
        localStorage.setItem("loggedCustomer", JSON.stringify(loggedCustomer));
        return;
    }

    throw new Error("Invalid email/password");
}

export async function register(customerData) {
    const customers = await (await getAllCustomers()).data;

    if(customers.find((c) => c.email === customerData.email)) {
        throw new Error("Email already exists!");
    }

    customerData = {
        ...customerData,
    };

    return axios.post(`${apiUrl}/customers`, customerData);
}