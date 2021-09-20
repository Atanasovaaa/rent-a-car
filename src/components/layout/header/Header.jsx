import { Container, Nav, Navbar } from "react-bootstrap";
import { getLoggedAdmin,  logout } from "../../../core/services/AuthService";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedCustomer } from "../../../core/actions/customer-actions";

export default function Header() {
    //const loggedCustomer = getLoggedCustomer();
    const loggedAdmin = getLoggedAdmin();
    const loggedCustomer = useSelector(state => state.customersReducer.isCustomerLoggedIn);
    const dispatch = useDispatch();
    
    const onLogout = () => {
        logout();
        dispatch(setLoggedCustomer(false));
        //window.location.reload(false);
    }

    return (
            <header className="header">
                 <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Rent-a-car</Navbar.Brand>
                        { loggedAdmin && 
                        <Nav className="me-auto">
                            <Nav.Link href="/">Vehicles</Nav.Link>
                            <Nav.Link href="/vehicle/create">Create Vehicle</Nav.Link>
                            <Nav.Link href="/customers-list">Customers</Nav.Link>
                            <Nav.Link href="/customer/create">Create Customer</Nav.Link>
                        </Nav> }
                        <Nav className="justify-content-end">
                            <Nav.Link href="/register">Register</Nav.Link>

                            { !loggedCustomer && !loggedAdmin && <Nav.Link href="/login">Login for Customers</Nav.Link> }
                            { loggedCustomer && <span className="btn btn-danger" refresh="true" onClick={onLogout} >Logout</span> }
                            { !loggedAdmin && !loggedCustomer && <Nav.Link href="/admin-login">Login for Admins</Nav.Link> }
                            { loggedAdmin && <span className="btn btn-danger" refresh="true" onClick={onLogout} >Logout</span> }
                        </Nav>
                    </Container>
                </Navbar>
            </header>
    )
}