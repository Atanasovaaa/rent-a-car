import { useEffect, useState } from "react";
import { getVehicleById } from "../../../core/services/VehicleService";
import VehicleCard from "../vehicle-card/VehicleCard";

export default function Vehicle(props) {
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        getVehicleById(props.computedMatch.params.id).then(response => {
            setVehicle(response.data);
        })
    }, [props.computedMatch.params.id])
    
    return (
        <div className="vehicle-info-wrapper d-flex">
            <VehicleCard vehicle={vehicle}></VehicleCard>
        </div>
    );
}