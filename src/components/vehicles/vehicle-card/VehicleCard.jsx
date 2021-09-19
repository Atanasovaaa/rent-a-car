import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLoggedAdmin, getLoggedCustomer } from "../../../core/services/AuthService";

const vehicleContent = (vehicle, onVehicleDelete) => {

    const loggedAdmin = getLoggedAdmin();
    const loggedCustomer = getLoggedCustomer();

    return(
        <div className="card-wrapper">
            <Card style={{ width: '20em'}}>
                <Card.Img variant="top" src={`http://localhost:3000/cars/${vehicle.image}`} style={{width:'100%', height: 'auto'}}/>
                <Card.Body>
                <Card.Title> <Link to={`/vehicles/${vehicle.id}`} > {vehicle.brand} {vehicle.model} </Link></Card.Title> 
                        <div>
                            <div>
                                <strong>Construction year: </strong><span>{vehicle.year}</span>
                            </div>     
                            <div>
                                <strong>Vehicle Type: </strong><span>{vehicle.vehicleType}</span>
                            </div>
                            <div>
                                <strong>Fuel Type: </strong><span>{vehicle.fuelType}</span>
                            </div>
                            <div>
                                <strong>Number of Seats: </strong><span>{vehicle.numberOfSeats}</span>
                            </div>
                            <div>
                                <strong>Price per Day: </strong><span>{vehicle.pricePerDay}</span>
                            </div>
                            <div>
                                <strong>Available: </strong><span>{vehicle.count}</span>
                            </div>
                        </div>
                        <hr/>
                        <div >
                            { vehicle.count>0 && loggedCustomer && <Link to={`/rent/${vehicle.id}`} className="btn btn-primary w-100 my-2" style={{ color: "white"}}>Rent</Link> }

                            { loggedAdmin && <Link to={`/vehicles/edit/${vehicle.id}`} className="btn btn-primary w-100 my-2" style={{ color: "white"}}>Edit Vehicle</Link> }
                            { loggedAdmin && <button className="btn btn-danger w-100 my-2" onClick={() => onVehicleDelete(vehicle.id)}>Delete Vehicle</button> }
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default function VehicleCard({vehicle, onVehicleDelete}) {
    return vehicleContent(vehicle, onVehicleDelete);
}