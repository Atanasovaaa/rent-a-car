import { Route, Switch } from "react-router";
import AuthenticatedRoute from "../../../core/guards/AuthenticatedRoute";
import { NonAuthenticatedRoute } from "../../../core/guards/NonAuthenticatedRoute";
import AdminLogin from "../../authentication/admin-login/AdminLogin";
import Login from "../../authentication/login/Login";
import Register from "../../authentication/register/Register";
import CustomerEdit from "../../customers/customer-edit/CustomerEdit";
import Customer from "../../customers/customer/Customer";
import CustomersList from "../../customers/customers-list/CustomersList";
import VehicleEdit from "../../vehicles/vehicle-edit/VehicleEdit";
import Vehicle from "../../vehicles/vehicle/Vehicle";
import VehiclesList from "../../vehicles/vehicles-list/VehiclesList";

export default function Main() {
    return (
        <div className="main-content">
            <Switch>
                <Route exact path="/" component={VehiclesList}/>
                <AuthenticatedRoute exact path="/vehicle/create" component={VehicleEdit} />
                <AuthenticatedRoute exact path="/vehicles/edit/:id" component={VehicleEdit} />
                <AuthenticatedRoute exact path="/vehicles/:id" component={Vehicle} />
                <AuthenticatedRoute exact path="/customers/:id" component={Customer} />
                <AuthenticatedRoute exact path="/customer/create" component={CustomerEdit} />
                <AuthenticatedRoute exact path="/customers-list" component={CustomersList} />
                <AuthenticatedRoute exact path="/customer/edit/:id" component={CustomerEdit} />
                <NonAuthenticatedRoute exact path="/register" component={Register} />
                <NonAuthenticatedRoute exact path="/login" component={Login} />
                <NonAuthenticatedRoute exact path="/admin-login" component={AdminLogin} />
            </Switch>
        </div>
    );
}
