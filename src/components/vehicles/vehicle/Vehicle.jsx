import { useEffect, useState } from "react";
import { getVehicleById } from "../../../core/services/VehicleService";
import VehicleCard from "../vehicle-card/VehicleCard";

export default function Vehicle(props) {
    const [vehicle, setVehicle] = useState({});
    
    useEffect(() => {
        getVehicleById(props.match.params.id).then(response => {
            setVehicle(response.data);
        })
    }, [props.match.params.id])
    
    return (
        <div className="vehicle-info-wrapper">
            <VehicleCard vehicle={vehicle} />
        </div>
    );
}