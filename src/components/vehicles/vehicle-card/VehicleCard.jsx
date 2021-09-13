import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const vehicleContent = (vehicle) => {
    return(
        <div className="vehicle-card-wrapper">
            <Card style={{ width: '20em'}}>
                <Card.Img variant="top" src={`cars/${vehicle.image}`} style={{width:'100%', height: 'auto'}}/>
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
                        <Link to={`/vehicles/edit/${vehicle.id}`}>Edit Vehicle</Link>
                </Card.Body>
            </Card>
        </div>
    );
}


export default function VehicleCard({vehicle}) {
    return vehicleContent(vehicle);
}