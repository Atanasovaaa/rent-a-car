import { Redirect } from "react-router";
import { getLoggedAdmin, getLoggedCustomer } from "../services/AuthService";

export function NonAuthenticatedRoute(props) {
    const customer = getLoggedCustomer();
    const admin = getLoggedAdmin();

    if(!customer && !admin) {
        return <props.component {...props} />;
    }

    return <Redirect to="/" />
}