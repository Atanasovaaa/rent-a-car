import { useEffect, useState } from "react";
import { getLoggedCustomer } from "../../../core/services/AuthService";
import { getCustomerById, saveCustomer } from "../../../core/services/CustomerService";
import { getVehicleById, saveVehicle } from "../../../core/services/VehicleService";
import { Col, Form, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { saveRent } from "../../../core/services/RentEventService";
import { Redirect } from "react-router";

export default function RentEvent(props) {
    const [customer, setCustomer] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [days, setDays] = useState(0);

    const customerId = getLoggedCustomer().id;
    const vehicleId = props.computedMatch.params.id;

    const [rentEvent, setRentEvent] = useState({
        customerId: customerId,
        vehicleId: vehicleId,
        startDate: '',
        days: '',
        price: ''
    });    
    
    useEffect(() => {
        getCustomerById(customerId).then(response => {
            setCustomer(response.data);
        })
    }, [customerId])
    

    useEffect(() => {
        getVehicleById(vehicleId).then(response => {
            setVehicle(response.data);
        });
    }, [vehicleId])    

    const onInputChange = (event) => {
        setRentEvent((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

        setDays(event.target.value);
    }

    const totalPrice = () => {
        const totalPrice = vehicle.pricePerDay * +days;
        return (totalPrice * ( (100-getDiscount(days)) / 100 )).toFixed(2); 
    }

    const getDiscount = (localDays) =>{
        if(localDays > 10) return 10;
        if(localDays > 5) return 7;
        if(localDays > 3) return 5;
        return 0;
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
    }
    
    const finalPrice = totalPrice();

    return (
        <>
        { shouldRedirect && <Redirect to="/"/> }
        <div className="info-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control readOnly type="text" id="brand" name="brand" value={vehicle.brand || ""} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Model</Form.Label>
                        <Form.Control readOnly type="text" id="model" name="model" value={vehicle.model || ""} onChange={onInputChange} required />
                    </Form.Group>    

                    <Form.Group as={Col}>
                        <Form.Label>Price per Day</Form.Label>
                        <Form.Control readOnly type="text" id="pricePerDay" name="pricePerDay" value={vehicle.pricePerDay || ""} onChange={onInputChange} required />
                    </Form.Group>             
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control readOnly type="text" id="name" name="name" value={customer.name || ""} onChange={onInputChange} required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control readOnly type="email" id="email" name="email" value={customer.email || ""} onChange={onInputChange} required />
                    </Form.Group>  
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" id="startDate" name="startDate" value={rentEvent.startDate} onChange={onInputChange}/>
                    </Form.Group>  
                    <Form.Group as={Col}>
                        <Form.Label>Days</Form.Label>
                        <Form.Control type="number" id="days" name="days" value={days || ""} onChange={onInputChange} required />
                    </Form.Group>     
                    <Form.Group as={Col}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="price" id="price" name="price" readOnly value={finalPrice || ""}/>
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