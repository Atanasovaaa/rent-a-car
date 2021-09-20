import { CLEAR_SELECTED_VEHICLE, DELETE_VEHICLE, EDIT_VEHICLE, GET_ALL_VEHICLES, GET_VEHICLE_BY_ID, SAVE_VEHICLE } from "../action-types/vehicle-action-types";

const initialState = {
    vehicles: [],
    vehicle: {}
}

export function vehiclesReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_VEHICLES:
            return { ...state, vehicles: action.payload }
        case DELETE_VEHICLE:
            return { ...state, vehicles: state.vehicles.filter(v => v.id !== action.payload) }
        case GET_VEHICLE_BY_ID:
            return { ...state, vehicle: action.payload }
        case EDIT_VEHICLE:
            return { ...state, vehicle: { ...state.vehicle, ...action.payload } }
        case SAVE_VEHICLE:
            return { ...state, vehicles: [ ...state.vehicles.filter(v => v.id !== action.payload.id), action.payload ], vehicle: {} }
        case CLEAR_SELECTED_VEHICLE:
            return { ...state, vehicle: action.payload }
        default:
            return state;
    }
}