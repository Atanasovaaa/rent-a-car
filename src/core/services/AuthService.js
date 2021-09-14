import axios from "axios";
import { getAllCustomers } from "./CustomerService";

const apiUrl = "http://localhost:3000";

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