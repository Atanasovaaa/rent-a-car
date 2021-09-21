import { useEffect, useState } from "react";
import { getLoggedCustomer } from "../../../core/services/AuthService";
import { deleteRent, getAllRents, getMyRents } from "../../../core/services/RentEventService";
import { getAllVehicles } from "../../../core/services/VehicleService";
import RentCard from "../rent-card/RentCard";

export default function RentsList() {
    const [rents, setRents] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    const loggedCustomer = getLoggedCustomer();


    useEffect(() => {
        if(loggedCustomer) {
            getMyRents(loggedCustomer.id).then(response => {
                const myRents = response.data.filter((r) => r.customerId === loggedCustomer.id);
                setRents(myRents);
            })
        } else {
            getAllRents().then(response => {
                setRents(response.data)
            })
        }
        getAllVehicles().then(response => {
            setVehicles(response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onRentDelete = (id) => {
        deleteRent(id).then(_ => {
            setRents((prevState) => {
                return prevState.filter(v => v.id !== id);
            })
        });
    }

    return (
        <div className="list-wrapper">
            { rents.map(rent => <RentCard key={rent.id} rent={rent} vehicles={vehicles} onRentDelete={onRentDelete} />)}
        </div>
    );
}