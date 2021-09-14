import { useEffect, useState } from "react";
import { deleteVehicle, getAllVehicles } from "../../../core/services/VehicleService";
import VehicleCard from "../vehicle-card/VehicleCard";

export default function VehiclesList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllVehicles().then(response => {
            setVehicles(response.data);
        })
    }, []);

    const onVehicleDelete = (id) => {
        deleteVehicle(id).then(response => {
            setVehicles((prevState) => {
                return prevState.filter(v => v.id !== id);
            })
        });
    }

    return (
        <div className="vehicles-list-wrapper">
            {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} onVehicleDelete={onVehicleDelete} />)}
        </div>
    );
}