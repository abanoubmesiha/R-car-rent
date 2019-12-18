import React from "react";
import { Route, Switch} from "react-router-dom";

import AddClient from "./addClient";
import AllClients from "./allClients";

const Clients = () => (
    <Switch>
        <Route path="/cls/all2" component={AllClients}/>
        <Route path="/cls/all" component={AllClients}/>
        <Route path="/cls/nwcls" component={AddClient}/>
    </Switch>
);

export default Clients;