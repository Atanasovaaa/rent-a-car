import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAllVehicles() {
    return axios.get(`${apiUrl}/vehicles`);
}

export function getVehicleById(id) {
    return axios.get(`${apiUrl}/vehicles/${id}`);
}

export function createVehicle(vehicleData) {

    vehicleData = {
        ...vehicleData,
        year: `2018`,
        vehicleType: `economy`,
        fuelType: `petrol`,
        numberOfSeats: `2`,
        image: `alfa-romeo-mito.png`
    }

    return axios.post(`${apiUrl}/vehicles`, vehicleData)
}

export function saveVehicle(vehicleData) {
    if(vehicleData.id) {
        return axios.put(`${apiUrl}/vehicles/${vehicleData.id}`, vehicleData)
    }

    return createVehicle(vehicleData);
}

export function deleteVehicle(id) {
    return axios.delete(`${apiUrl}/vehicles/${id}`);
}