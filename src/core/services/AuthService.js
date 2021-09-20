import axios from "axios";
import { getAdmin } from "./AdminService";
import { getAllCustomers } from "./CustomerService";

const apiUrl = "http://localhost:3000";

export function getLoggedCustomer() {
    return JSON.parse(localStorage.getItem("loggedCustomer"));
}

export function getLoggedAdmin() {
    return JSON.parse(localStorage.getItem("loggedAdmin"));
}

export async function adminLogin(adminData) {
    const admin = await ( await getAdmin()).data;

    const loggedAdmin = admin.find(
        (a) => a.email === adminData.email && a.password.toString() === adminData.password
    );

    if(loggedAdmin) {
        localStorage.setItem("loggedAdmin", JSON.stringify(loggedAdmin));
        return;
    }

    throw new Error("Invalid email/password");
}

export async function login(customerData) {
  getAllCustomers().then(customers =>{
        const loggedCustomer = customers.find(
            (c) => 
                c.email === customerData.email && c.password.toString() === customerData.password
        );

        if(loggedCustomer) {
            localStorage.setItem("loggedCustomer", JSON.stringify(loggedCustomer));
            return;
        }

        throw new Error("Invalid email/password");
    });
}

export async function register(customerData) {
    const customers = await (await getAllCustomers()).data;

    if(customers.find((c) => c.email === customerData.email)) {
        throw new Error("Email already exists!");
    }

    customerData = {
        ...customerData,
        gender: `male`
    };

    return axios.post(`${apiUrl}/customers`, customerData);
}

export function logout() {
    const customer = localStorage.getItem("loggedCustomer");
    
    if(customer) {
        localStorage.removeItem('loggedCustomer');
    }
    else {
        localStorage.removeItem('loggedAdmin');
    }

}