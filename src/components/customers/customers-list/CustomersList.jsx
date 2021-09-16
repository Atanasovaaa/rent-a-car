import { useEffect, useState } from "react";
import { deleteCustomer, getAllCustomers } from "../../../core/services/CustomerService";
import CustomerCard from "../customer-card/CustomerCard";

export default function CustomersList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers().then(response => {
            setCustomers(response.data);
        })
    }, []);

    const onCustomerDelete = (id) => {
        deleteCustomer(id).then(response => {
            setCustomers((prevState) => {
                return prevState.filter(c => c.id !== id);
            })
        });
    }

    return (
        <div className="vehicles-list-wrapper">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} onCustomerDelete={onCustomerDelete} />)}
        </div>
    );
}