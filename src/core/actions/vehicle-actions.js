import { CLEAR_SELECTED_VEHICLE, DELETE_VEHICLE, EDIT_VEHICLE, GET_ALL_VEHICLES, GET_VEHICLE_BY_ID, SAVE_VEHICLE } from "../action-types/vehicle-action-types"
import { deleteVehicle, getAllVehicles, getVehicleById, saveVehicle } from "../services/VehicleService"

export function getAllVehiclesFromAPI() {
    return dispatch => {
        getAllVehicles().then(vehicles => {
            dispatch({
                type: GET_ALL_VEHICLES,
                payload: vehicles
            })
        })
    }
}

export function deleteVehicleFromAPI(id) {
    return dispatch => {
        deleteVehicle(id).then(_ => {
            dispatch({
                type: DELETE_VEHICLE,
                payload: id
            })
        })
    }
}

export function saveVehicleInAPI(vehicleData) {
    return dispatch => {
        saveVehicle(vehicleData).then(_ => {
            dispatch({
                type: SAVE_VEHICLE,
                payload: vehicleData
            })
        })
    }
}

export function getVehicleByIdFromAPI(id) {
    return dispatch => {
        getVehicleById(id).then(vehicle => {
            dispatch({
                type: GET_VEHICLE_BY_ID,
                payload: vehicle.data
            })
        })
    }
}

export function editVehicle(vehicleData) {
    return dispatch => {
        dispatch({
            type: EDIT_VEHICLE,
            payload: vehicleData
        })
    }
}

export function clearSelectedVehicle() {
    return dispatch => {
        dispatch({
            type: CLEAR_SELECTED_VEHICLE,
            payload: {}
        })
    }
}