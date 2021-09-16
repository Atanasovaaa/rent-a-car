import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router";
import { adminLogin } from "../../../core/services/AuthService";

export default function AdminLogin(props) {
    const [adminData, setAdminData] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const onInputChange = (event) => {
        event.persist();

        setAdminData((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        adminLogin(adminData).then(() => {
            setRedirect(true);
        })
            .catch(err => setError(err.message));
    }


    return (
        <>
            { redirect && <Redirect to="/"/> }
            <div className="login-form">
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
                </form>
            </div>
        </>
    );

}