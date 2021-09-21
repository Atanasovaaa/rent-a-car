import { Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const rentContent = (rent, vehicle, onRentDelete) => {

    function notify() {
        toast.success("The rent was deleted!", {
            position: toast.POSITION.TOP_RIGHT
          });
    }


    const onClick = (event) => {
        onRentDelete(rent);
        notify();
    }
    
    return (
        <>
        <ToastContainer autoClose={3000} />
        <div className="card-wrapper">
            <Card>
                <Card.Body>
                    <div>
                        <div>
                            <strong>Vehicle: </strong><span>{vehicle.map(vehicle => vehicle.brand)} {vehicle.map(vehicle => vehicle.model)}</span>
                        </div>
                        <div>
                            <strong>Start date: </strong><span>{new Date(rent.startDate).toLocaleDateString('en-GB')}</span>
                        </div>
                        <div>
                            <strong>Days: </strong><span>{rent.days}</span>
                        </div>
                        <div>
                            <strong>Price: </strong><span>{rent.price}</span>
                        </div>
                        <hr/>
                        <button className="btn btn-danger w-100 my-2" onClick={onClick}>Delete Rent</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default function RentCard({rent, vehicles, onRentDelete}) {
    const vehicle = vehicles.filter((v) => v.id === rent.vehicleId);
    return rentContent(rent, vehicle, onRentDelete)
} 