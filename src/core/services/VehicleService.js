import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAllVehicles() {
    return axios.get(`${apiUrl}/vehicles`);
}

export function getVehicleById(id) {
    return axios.get(`${apiUrl}/vehicles/${id}`);
}

export function saveVehicle(vehicleData) {
    if(vehicleData.id) {
        return axios.put(`${apiUrl}/vehicles/${vehicleData.id}`, vehicleData)
    }

    return;
}