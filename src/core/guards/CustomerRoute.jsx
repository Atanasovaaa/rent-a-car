import { Redirect } from "react-router";
import { getLoggedCustomer } from "../services/AuthService";

export default function CustomerRoute(props) {
    const customer = getLoggedCustomer();

    if(customer) {
        return <props.component {...props}/>
    }

    return <Redirect to="/" />
}