import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
            <header className="header">
                 <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Rent-a-car</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">Customers</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
    )
}