import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAllRents() {    
    return axios.get(`${apiUrl}/rents`);
}

export async function getMyRents() {

    return axios.get(`${apiUrl}/rents`);
    
}

export function getRentEventById(id) {
    return axios.get(`${apiUrl}/rents/${id}`);
}

export function createRentEvent(rentData, totalPrice) {
    rentData = {
        ...rentData,
        price: totalPrice
    }

    return axios.post(`${apiUrl}/rents`, rentData);
}

export function saveRent(rentData, totalPrice) {
    if(rentData.id) {
        return axios.put(`${apiUrl}/rent/${rentData.id}`, rentData)
    }

    return createRentEvent(rentData, totalPrice);
}

export function deleteRent(id) {
    return axios.delete(`${apiUrl}/rents/${id}`);
}