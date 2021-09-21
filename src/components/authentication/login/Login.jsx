import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../core/services/AuthService";

export default function Login(props) {
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

        login(customerData).then(() => {
            setRedirect(true);
        })
            .catch(err => setError(err.message));
    }


    return (
        <>
            { redirect && <Redirect to="/"/> }
            <div className="info-wrapper">
                <form onSubmit={onFormSubmit} style={{width: "30rem"}}>
                    { error && <span className="text-danger" >{error}</span> }

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" id="email" type="email" placeholder="Enter email" onChange={onInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" id="password" type="password" placeholder="Password" onChange={onInputChange} required />
                    </Form.Group>

                    <Button className="btn btn-primary" type="submit">
                        Login
                    </Button>
                    <div>
                        <Link to="/register">Don't have an account yet?</Link>
                    </div>
                </form>
            </div>
        </>
    );
}