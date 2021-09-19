import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const customerContent = (customer, onCustomerDelete) => {

    return(
        <div className="card-wrapper">
            <Card style={{ width: '20em'}}>
                <Card.Body>
                <Card.Title> <Link to={`/customers/${customer.id}`} > {customer.name}</Link></Card.Title> 
                        <div>
                            <div>
                                <strong>Age: </strong><span>{customer.age}</span>
                            </div>     
                            <div>
                                <strong>Gender: </strong><span>{customer.gender}</span>
                            </div>
                            <div>
                                <strong>Phone: </strong><span>{customer.phone}</span>
                            </div>
                            <div>
                                <strong>Email: </strong><span>{customer.email}</span>
                            </div>
                        </div>
                        <hr/>
                        <div >
                            <Link to={`/customer/edit/${customer.id}`} className="btn btn-primary w-100 my-2" style={{ color: "white"}}>Edit Customer</Link> 
                            <button className="btn btn-danger w-100 my-2" onClick={() => onCustomerDelete(customer.id)}>Delete Customer</button>
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default function CustomerCard({customer, onCustomerDelete}) {
    return customerContent(customer, onCustomerDelete);
}