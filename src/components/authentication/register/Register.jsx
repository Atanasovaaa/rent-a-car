import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router";
import { register } from "../../../core/services/AuthService";

export default function Register(props) {
    const [customerData, setCustomerData] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const onInputChange = (event) => {
        event.persist();

        setCustomerData((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log(customerData);
        register(customerData).then(() => {
            setRedirect(true);
        })
            .catch(err => setError(err.message));
    }

    return (
        <>
            { redirect && <Redirect to="/login"/> }
            <div className="register-form">
                <form onSubmit={onFormSubmit} style={{width: "30rem"}}>
                    { error && <span className="text-danger" >{error}</span> }
                    <Form.Group className="mb-3" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" id="name" type="text" placeholder="Enter your full name" onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="age" id="age" type="text" placeholder="Enter your age" onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Gender</Form.Label>
                        <Form.Select name="gender" id="gender" onChange={onInputChange} required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phone" id="phone" type="tel" placeholder="999 999 9999" onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" id="email" type="email" placeholder="Enter email" onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" id="password" type="password" placeholder="Password" onChange={onInputChange} required />
                    </Form.Group>

                    <Button className="btn btn-primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}