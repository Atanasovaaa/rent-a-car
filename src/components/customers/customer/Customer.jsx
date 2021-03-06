import { useEffect, useState } from "react";
import { getCustomerById } from "../../../core/services/CustomerService";
import CustomerCard from "../customer-card/CustomerCard";

export default function Customer(props) {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        getCustomerById(props.computedMatch.params.id).then(response => {
            setCustomer(response.data);
        })
    }, [props.computedMatch.params.id]);



    return (
        <div className="info-wrapper">
            <CustomerCard customer={customer} />
        </div>
    );
}