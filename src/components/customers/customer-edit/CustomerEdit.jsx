import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { getCustomerById, saveCustomer } from "../../../core/services/CustomerService";

export default function CustomerEdit(props) {

    const [editedCustomer, setEditedCustomer ] = useState({
        name: '',
        age: '',
        gender: 'male',
        phone: '',
        email: ''
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if(props.computedMatch.params.id) {
            getCustomerById(props.computedMatch.params.id).then((response) => {
                setEditedCustomer(response.data);
            })
        }
    }, [props.computedMatch.params.id]);

    const onInputChange = (event) => {
        setEditedCustomer((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveCustomer(editedCustomer).then(_ => {
            setShouldRedirect(true);
        })
    }
    
    return (
        <>
        { shouldRedirect && <Redirect to="/customers-list"/> }
        <div className="info-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"  id="name" name="name" value={editedCustomer.name|| ""} onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" id="age" name="age" value={editedCustomer.age|| ""} onChange={onInputChange} required />
                    </Form.Group>                
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select selected={editedCustomer.gender} value={editedCustomer.gender || ""} id="gender" name="gender" onChange={onInputChange} required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel"  id="phone" name="phone" value={editedCustomer.phone|| ""} onChange={onInputChange} required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">  
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="email" name="email" value={editedCustomer.email|| ""} onChange={onInputChange} required />
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