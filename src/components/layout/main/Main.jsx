import { Route, Switch } from "react-router";
import VehicleEdit from "../../vehicles/vehicle-edit/VehicleEdit";
import VehiclesList from "../../vehicles/vehicles-list/VehiclesList";
import "./_main.scss";

export default function Main() {
    return (
        <div className="main-content">
            <Route exact path="/" component={VehiclesList} />
            <Switch>
                <Route exact path="/">
                <VehiclesList />
                </Route>
                <Route path="/vehicles/edit/:id" component={VehicleEdit} />
            </Switch>
        </div>
    );
}
