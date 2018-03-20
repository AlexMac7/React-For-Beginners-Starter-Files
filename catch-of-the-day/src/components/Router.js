import React from 'react';
// name import, can be used to export as well
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        {/*Switch tag tries first route, then second etc. before falling back to a catchall that renders the NotFound component*/}
        <Switch>
            {/*tell route which path it is and what component to render*/}
            <Route exact path={'/'} component={StorePicker}/>
            {/*catch all for any store name*/}
            <Route exact path={'/store/:storeId'} component={App}/>
            {/*catch all for the fallback*/}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
