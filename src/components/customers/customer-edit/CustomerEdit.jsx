import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { clearSelectedCustomer, editCustomer, getCustomerByIdFromAPI, saveCustomerInAPI } from "../../../core/actions/customer-actions";

export default function CustomerEdit(props) {

    const dispatch = useDispatch();
    const editedCustomer = useSelector(state => state.customer);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        dispatch(clearSelectedCustomer());
        if(props.computedMatch.params.id) {
            dispatch(getCustomerByIdFromAPI(props.computedMatch.params.id));
        }
    }, [props.computedMatch.params.id, dispatch]);

    const onInputChange = (event) => {
        dispatch(editCustomer({ [event.target.name]: event.target.value.trim() }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(saveCustomerInAPI(editedCustomer));
        setShouldRedirect(true);
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
                        <Form.Select value={editedCustomer.gender || ""} id="gender" name="gender" onChange={onInputChange} required>
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