import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { getVehicleById, saveVehicle } from "../../../core/services/VehicleService";

export default function VehicleEdit(props) {

    const [editedVehicle, setEditedVehicle] = useState({
        brand: '',
        model: '',
        year: '',
        vehicleType: '',
        fuelType: '',
        numberOfSeats: '',
        image: '',
        pricePerDay: '',
        count: ''
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if(props.computedMatch.params.id) {
            getVehicleById(props.computedMatch.params.id).then((response) => {
                setEditedVehicle(response.data);
            })
        }
    }, [props.computedMatch.params.id])

    const onInputChange = (event) => {
        setEditedVehicle((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveVehicle(editedVehicle).then(_ => {
            setShouldRedirect(true);
        })
    }
    
    return (
        <>
        { shouldRedirect && <Redirect to="/"/> }
        <div className="vehicle-edit-form">
            <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" id="brand" name="brand" value={editedVehicle.brand} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" id="model" name="model" value={editedVehicle.model} onChange={onInputChange} required />
                    </Form.Group>                
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Year</Form.Label>
                        <Form.Select value={editedVehicle.year} id="year" name="year" onChange={onInputChange} required>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Select value={editedVehicle.vehicleType} id="vehicleType" name="vehicleType" onChange={onInputChange} required>
                            <option value="economy">Economy</option>
                            <option value="estate">Estate</option>
                            <option value="luxury">Luxury</option>
                            <option value="suv">SUV</option>
                            <option value="cargo">Cargo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Fuel Type</Form.Label>
                        <Form.Select value={editedVehicle.fuelType} id="fuelType" name="fuelType" onChange={onInputChange} required>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="electric">Electric</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Number of Seats</Form.Label>
                        <Form.Select value={editedVehicle.numberOfSeats} id="numberOfSeats" name="numberOfSeats" onChange={onInputChange} required>
                            <option value="2">2</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Price Per Day</Form.Label>
                        <Form.Control type="text" id="pricePerDay" name="pricePerDay" value={editedVehicle.pricePerDay} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Available Cars</Form.Label>
                        <Form.Control type="text" id="count" name="count" value={editedVehicle.count} onChange={onInputChange} required />
                    </Form.Group>
                </Row>

                <Button className="btn btn-success" type="submit">
                    Save
                </Button>
            </Form>
            
        </div>
        
        </>
    );
    
    
}