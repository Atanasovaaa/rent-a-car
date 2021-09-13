import { useEffect, useState } from "react";
import { getAllVehicles } from "../../../core/services/VehicleService";
import VehicleCard from "../vehicle-card/VehicleCard";

export default function VehiclesList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllVehicles().then(response => {
            console.log(response);
            setVehicles(response.data);
        })
    }, []);

    return (
        <div className="vehicles-list-wrapper">
            {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>)}
        </div>
    );
}