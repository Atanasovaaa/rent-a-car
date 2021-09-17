import { useEffect, useState } from "react";
import { getLoggedCustomer } from "../../../core/services/AuthService";
import { getCustomerById, saveCustomer } from "../../../core/services/CustomerService";
import { getVehicleById, saveVehicle } from "../../../core/services/VehicleService";
import DatePicker from "react-datepicker";
import { Col, Form, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { saveRent } from "../../../core/services/RentEventService";
import { Redirect } from "react-router";

export default function RentEvent(props) {
    const [customer, setCustomer] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [days, setDays] = useState(0);

    const customerId = getLoggedCustomer();
    const vehicleId = props.computedMatch.params.id;

    const [rentEvent, setRentEvent] = useState({
        customerId: customerId.id,
        vehicleId: vehicleId,
        startDate: new Date(),
        days: '',
        price: ''
    });    
    
    useEffect(() => {
        getCustomerById(customerId.id).then(response => {
            setCustomer(response.data);
        })
    }, [customerId.id])
    

    useEffect(() => {
        getVehicleById(vehicleId).then(response => {
            setVehicle(response.data);
        });
    }, [vehicleId])    

    const onInputChange = (event) => {
        setRentEvent((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value.trim()
        }));
        setDays(event.target.value);
    }

    const totalPrice = () => {
        const totalPrice = vehicle.pricePerDay * days;
        if(days > 10) return (totalPrice * ( (100-10) / 100 )).toFixed(2);
        else if(days > 5) return (totalPrice * ( (100-7) / 100 )).toFixed(2);
        else if(days > 3) return (totalPrice * ( (100-5) / 100 )).toFixed(2);
        return totalPrice; 
    }

    
    const onFormSubmit = (event) => {
        event.preventDefault();
        saveRent(rentEvent, totalPrice()).then(_ => {
            setShouldRedirect(true);
        });
        if(vehicle.count > 0){
            vehicle.count--;
        }
        saveVehicle(vehicle);

        if(!customer.rentCar) {
            customer.rentCar = true;
        }
        saveCustomer(customer);
    }

    return (
        <>
        { shouldRedirect && <Redirect to="/"/> }
        <div className="rent-vehicle-form">
            <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control disabled type="text" id="brand" name="brand" value={vehicle.brand} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Model</Form.Label>
                        <Form.Control disabled type="text" id="model" name="model" value={vehicle.model} onChange={onInputChange} required />
                    </Form.Group>    

                    <Form.Group as={Col}>
                        <Form.Label>Price per Day</Form.Label>
                        <Form.Control disabled type="text" id="pricePerDay" name="pricePerDay" value={vehicle.pricePerDay} onChange={onInputChange} required />
                    </Form.Group>             
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control disabled type="text" id="name" name="name" value={customer.name} onChange={onInputChange} required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control disabled type="email" id="email" name="email" value={customer.email} onChange={onInputChange} required />
                    </Form.Group>  
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Start Date and Time</Form.Label>
                        <DatePicker className="form-control" selected={startDate} id="startDate" name="startDate" value={rentEvent.startDate} onChange={startDate => setStartDate(startDate)} showTimeSelect dateFormat="Pp"/>
                    </Form.Group>  
                    <Form.Group as={Col}>
                        <Form.Label>Days</Form.Label>
                        <Form.Control type="number" id="days" name="days" value={days} onChange={onInputChange} required />
                    </Form.Group>     
                    <Form.Group as={Col}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="price" id="price" name="price" value={totalPrice()}/>
                    </Form.Group>                       
                    <Form.Group>

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