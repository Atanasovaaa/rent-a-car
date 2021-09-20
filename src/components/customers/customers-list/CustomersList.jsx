import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomerFromAPI, getAllCustomersFromAPI } from "../../../core/actions/customer-actions";
import CustomerCard from "../customer-card/CustomerCard";

export default function CustomersList() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers);
    
    useEffect(() => {
        dispatch(getAllCustomersFromAPI());
    }, [dispatch]);

    const onCustomerDelete = (id) => {
        dispatch(deleteCustomerFromAPI(id));
    }

    return (
        <div className="list-wrapper">
            { customers.map(customer => <CustomerCard key={customer.id} customer={customer} onCustomerDelete={onCustomerDelete} />)}
        </div>
    );
}