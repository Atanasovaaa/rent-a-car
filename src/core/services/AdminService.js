import axios from "axios";

const apiUrl = "http://localhost:3000";

export function getAdmin() {
    return axios.get(`${apiUrl}/admins`);
}