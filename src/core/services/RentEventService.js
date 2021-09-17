import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAllRents() {
    return axios.get(`${apiUrl}/rents`);
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
        return axios.put(`${apiUrl}/rents/${rentData.id}`, rentData)
    }

    return createRentEvent(rentData, totalPrice);
}