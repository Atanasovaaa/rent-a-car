import { Redirect } from "react-router";
import { getLoggedAdmin } from "../services/AuthService";

export default function AuthenticatedRoute(props) {
    const admin = getLoggedAdmin();

    if(admin) {
        return <props.component {...props} />;
    } 

    return <Redirect to="/" />
}