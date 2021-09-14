import { Route, Switch } from "react-router";
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
                <Route path="/vehicles/edit/:id" component={VehicleEdit} />
                <Route path="/vehicles/:id" component={Vehicle} />
            </Switch>
        </div>
    );
}
