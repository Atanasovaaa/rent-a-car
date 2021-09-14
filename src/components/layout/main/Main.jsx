import { Route, Switch } from "react-router";
import Login from "../../authentication/login/Login";
import Register from "../../authentication/register/Register";
import VehicleEdit from "../../vehicles/vehicle-edit/VehicleEdit";
import Vehicle from "../../vehicles/vehicle/Vehicle";
import VehiclesList from "../../vehicles/vehicles-list/VehiclesList";

export default function Main() {
    return (
        <div className="main-content">
            {/* <Route exact path="/" component={VehiclesList} /> */}
            <Switch>
                <Route exact path="/">
                <VehiclesList />
                </Route>
                <Route exact path="/vehicles/edit/:id" component={VehicleEdit} />
                <Route exact path="/vehicles/:id" component={Vehicle} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    );
}
