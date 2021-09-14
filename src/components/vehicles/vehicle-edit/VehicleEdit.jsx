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
        if(props.match.params.id) {
            getVehicleById(props.match.params.id).then((response) => {
                setEditedVehicle(response.data);
            })
        }
    }, [props.match.params.id])

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
                    <Form.Group as={Col} controlId="formGridBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand Name" id="brand" name="brand" value={editedVehicle.brand} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Enter Model Name" id="model" name="model" value={editedVehicle.model} onChange={onInputChange} required />
                    </Form.Group>                
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Select defaultValue={editedVehicle.year} id="year" name="year" onChange={onInputChange} required>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridVehicleType">
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Select defaultValue={editedVehicle.vehicleType} id="vehicleType" name="vehicleType" onChange={onInputChange} required>
                            <option value="economy">Economy</option>
                            <option value="estate">Estate</option>
                            <option value="luxury">Luxury</option>
                            <option value="suv">SUV</option>
                            <option value="cargo">Cargo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFuelType">
                        <Form.Label>Fuel Type</Form.Label>
                        <Form.Select defaultValue={editedVehicle.fuelType} id="fuelType" name="fuelType" onChange={onInputChange} required>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="electric">Electric</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumberOfSeats">
                        <Form.Label>Number of Seats</Form.Label>
                        <Form.Select defaultValue={editedVehicle.numberOfSeats} id="numberOfSeats" name="numberOfSeats" onChange={onInputChange} required>
                            <option value="2">2</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPricePerDay">
                        <Form.Label>Price Per Day</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price per Day" id="pricePerDay" name="pricePerDay" value={editedVehicle.pricePerDay} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumberOfSeats">
                        <Form.Label>Available Cars</Form.Label>
                        <Form.Control type="text" placeholder="Enter Available Car" id="count" name="count" value={editedVehicle.count} onChange={onInputChange} required />
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