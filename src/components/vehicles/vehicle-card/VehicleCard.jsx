import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const vehicleContent = (vehicle, onVehicleDelete) => {

    return(
        <div className="vehicle-card-wrapper">
            <Card style={{ width: '20em'}}>
                <Card.Img variant="top" src={`http://localhost:3000/cars/${vehicle.image}`} style={{width:'100%', height: 'auto'}}/>
                <Card.Body>
                    <Card.Title>{vehicle.brand} {vehicle.model}</Card.Title>
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
                            <Link to={`/vehicles/${vehicle.id}`} className="btn btn-dark w-100 my-2">View Vehicle</Link>
                            <Link to={`/vehicles/edit/${vehicle.id}`} className="btn btn-primary w-100 my-2" style={{ color: "white"}}>Edit Vehicle</Link>
                            <button className="btn btn-danger w-100 my-2" onClick={() => onVehicleDelete(vehicle.id)}>Delete Vehicle</button>
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default function VehicleCard({vehicle, onVehicleDelete}) {
    return vehicleContent(vehicle, onVehicleDelete);
}