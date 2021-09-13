import { Route } from "react-router";
import VehiclesList from "../../vehicles/vehicles-list/VehiclesList";
import "./_main.scss";

export default function Main() {
    return (
        <div className="main-content">
            <Route exact path="/vehicles" component={VehiclesList}></Route>
        </div>
    );
}
