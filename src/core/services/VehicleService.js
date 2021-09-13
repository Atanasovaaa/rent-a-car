import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAllVehicles() {
    return axios.get(`${apiUrl}/vehicles`);
}

export function getVehicleById(id) {
    return axios.get(`${apiUrl}/vehicles/${id}`);
}